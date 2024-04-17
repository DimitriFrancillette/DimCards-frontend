"use client"
import BuilderCardsDisplay from '../components/BuilderCardsDisplay';
import DeckMenu from "../components/DeckMenu";
import { useState } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer.js";

const DeckBuilderPage = () => {
  const [isMenu, setIsMenu] = useState(true);
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


  const closeMenu = (param) => {
    setIsMenu(param);
  };

  const openMenu = (param) => {
    setIsMenu(param);
  };

  const selected = (param) => {
    setSelectedFilter([...selectedFilter, param]);
  };

  const addCardToDeck = (card) => {

    if (deckList.length === 0) {
      setTotalCardsCount(totalCardsCount + 1);
      setDeckList([...deckList, { card, number: 1 }]);
      if (card.rarity === "Champion") {
        setChampionsCardsCount(championsCardsCount + 1);
      }
    }

    if (deckList.length !== 0) {
      const booleanArray = [];

      for (let i = 0; i < deckList.length; i++) {
        const isSameCard = Object.values(deckList[i].card).includes(card.id);
        booleanArray.push(isSameCard);
      }

      const trueIndex = booleanArray.findIndex(element => element === true);

      if (!booleanArray.includes(true) && totalCardsCount < 40) {

        if (card.rarity !== "Champion") {

          setTotalCardsCount(totalCardsCount + 1);
          setDeckList([...deckList, { card, number: 1 }]);
        } else if (card.rarity === "Champion" && championsCardsCount < 6) {

          setTotalCardsCount(totalCardsCount + 1);
          setChampionsCardsCount(championsCardsCount + 1);
          setDeckList([...deckList, { card, number: 1 }]);
        }

      } else if (booleanArray.includes(true)
        && trueIndex !== -1
        && deckList[trueIndex].number < 3
        && totalCardsCount < 40) {

        if (card.rarity !== "Champion") {
          deckList[trueIndex].number++;
          setTotalCardsCount(totalCardsCount + 1);
          setDeckList([...deckList]);
        } else if (card.rarity === "Champion" && championsCardsCount < 6) {
          deckList[trueIndex].number++;
          setTotalCardsCount(totalCardsCount + 1);
          setChampionsCardsCount(championsCardsCount + 1);
          setDeckList([...deckList]);
        }

      };
    };
  };
  console.log(totalCardsCount)


  const removeCardFromDeck = (card) => {
    const cardToRemove = deckList.find((element) => element.card.id === card.id);

    const index = deckList.findIndex(element => element.card.id === card.id);

    if (cardToRemove.number > 1) {
      cardToRemove.number--;
      deckList.splice(index, 1, cardToRemove);
      setDeckList([...deckList]);
      setTotalCardsCount(totalCardsCount - 1);
      if (card.rarity === "Champion") {
        setChampionsCardsCount(championsCardsCount - 1);
      }
    } else {
      setDeckList(deckList.filter(element => element.card.id !== card.id));
      setTotalCardsCount(totalCardsCount - 1);
      if (card.rarity === "Champion") {
        setChampionsCardsCount(championsCardsCount - 1);
      }
    };
  };

  return (
    <div>
      <Header />
      <div className='flex'>
        <BuilderCardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Deck Builder"} selectedFilter={selectedFilter} addCardToDeck={addCardToDeck} />
        {isMenu &&
          <DeckMenu closeMenu={closeMenu} deckList={deckList} removeCardFromDeck={removeCardFromDeck} key={deckList} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default DeckBuilderPage