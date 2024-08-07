'use client';
import BuilderCardsDisplay from '../components/BuilderCardsDisplay';
import DeckMenu from '../components/DeckMenu';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer.js';

const DeckBuilderPage = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    region: [],
    cost: [],
    type: [],
    rarity: [],
    keyword: [],
  });
  const [deckList, setDeckList] = useState([]);
  const [totalCardsCount, setTotalCardsCount] = useState(0);
  const [championsCardsCount, setChampionsCardsCount] = useState(0);

  const handleFilter = (param) => {
    setIsMenu(param);
  };

  const selected = (param) => {
    if (param.region) {
      if (param.region === 'Clear') {
        setSelectedFilter((prevState) => ({ ...prevState, region: [] }));
        return;
      }

      //if region name is not in selectedFiler.region array, we add the name in it or we remove it from the array
      !selectedFilter.region.includes(param.region)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            region: [...prevState.region, param.region],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            region: prevState.region.filter((e) => e !== param.region),
          }));
    }

    if (param.cost) {
      if (param.cost === 'Clear') {
        setSelectedFilter((prevState) => ({ ...prevState, cost: [] }));
        return;
      }

      !selectedFilter.cost.includes(param.cost)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            cost: [...prevState.cost, param.cost],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            cost: prevState.cost.filter((e) => e !== param.cost),
          }));
    }

    if (param.type) {
      if (param.type === 'Clear') {
        setSelectedFilter((prevState) => ({ ...prevState, type: [] }));
        return;
      }

      !selectedFilter.type.includes(param.type)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            type: [...prevState.type, param.type],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            type: prevState.type.filter((e) => e !== param.type),
          }));
    }

    if (param.rarity) {
      if (param.rarity === 'Clear') {
        setSelectedFilter((prevState) => ({ ...prevState, rarity: [] }));
        return;
      }

      !selectedFilter.rarity.includes(param.rarity)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            rarity: [...prevState.rarity, param.rarity],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            rarity: prevState.rarity.filter((e) => e !== param.rarity),
          }));
    }
  };

  const addCardToDeck = (card) => {
    if (deckList.length === 0) {
      setTotalCardsCount(totalCardsCount + 1);
      setDeckList([...deckList, { card, number: 1 }]);

      // if card rarity is Champion string then +1 champions cards count
      card.rarity === 'Champion' &&
        setChampionsCardsCount(championsCardsCount + 1);
    }

    if (deckList.length !== 0) {
      const booleanArray = [];

      for (let i = 0; i < deckList.length; i++) {
        const isSameCard = Object.values(deckList[i].card).includes(card.id);
        booleanArray.push(isSameCard);
      }

      const trueIndex = booleanArray.findIndex((element) => element === true);

      if (!booleanArray.includes(true) && totalCardsCount < 40) {
        if (card.rarity !== 'Champion') {
          setTotalCardsCount(totalCardsCount + 1);
          setDeckList([...deckList, { card, number: 1 }]);
        } else if (card.rarity === 'Champion' && championsCardsCount < 6) {
          setTotalCardsCount(totalCardsCount + 1);
          setChampionsCardsCount(championsCardsCount + 1);
          setDeckList([...deckList, { card, number: 1 }]);
        }
      } else if (
        booleanArray.includes(true) &&
        trueIndex !== -1 &&
        deckList[trueIndex].number < 3 &&
        totalCardsCount < 40
      ) {
        if (card.rarity !== 'Champion') {
          deckList[trueIndex].number++;
          setTotalCardsCount(totalCardsCount + 1);
          setDeckList([...deckList]);
        } else if (card.rarity === 'Champion' && championsCardsCount < 6) {
          deckList[trueIndex].number++;
          setTotalCardsCount(totalCardsCount + 1);
          setChampionsCardsCount(championsCardsCount + 1);
          setDeckList([...deckList]);
        }
      }
    }
  };

  const removeCardFromDeck = (card) => {
    const cardToRemove = deckList.find(
      (element) => element.card.id === card.id
    );

    const index = deckList.findIndex((element) => element.card.id === card.id);

    if (cardToRemove.number > 1) {
      cardToRemove.number--;
      deckList.splice(index, 1, cardToRemove);
      setDeckList([...deckList]);
      setTotalCardsCount(totalCardsCount - 1);
      card.rarity === 'Champion' &&
        setChampionsCardsCount(championsCardsCount - 1);
    } else {
      setDeckList(deckList.filter((element) => element.card.id !== card.id));
      setTotalCardsCount(totalCardsCount - 1);
      card.rarity === 'Champion' &&
        setChampionsCardsCount(championsCardsCount - 1);
    }
  };

  return (
    <div>
      <Header />
      <div className='flex'>
        <BuilderCardsDisplay
          pageName={'Deck Builder'}
          selectedFilter={selectedFilter}
          addCardToDeck={addCardToDeck}
          deckList={deckList}
        />
        {isMenu ? (
          <FilterMenu
            handleFilter={handleFilter}
            selected={selected}
            selectedFilter={selectedFilter}
          />
        ) : (
          <DeckMenu
            handleFilter={handleFilter}
            deckList={deckList}
            removeCardFromDeck={removeCardFromDeck}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DeckBuilderPage;
