"use client"
import BuilderCardsDisplay from '../components/BuilderCardsDisplay';
import CardsDisplay from '../components/CardsDisplay';
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
      setDeckList([...deckList, { card, number: 1 }]);
    }

    if (deckList.length !== 0) {
      const isTrueIn = []
      for (let i = 0; i < deckList.length; i++) {
        const isSameCard = Object.values(deckList[i].card).includes(card.id);
        isTrueIn.push(isSameCard);
      }

      const trueIndex = isTrueIn.findIndex(element => element === true);


      if (!isTrueIn.includes(true)) {
        setDeckList([...deckList, { card, number: 1 }]);
      } else if (isTrueIn.includes(true) && trueIndex !== -1 && deckList[trueIndex].number < 3) {
        deckList[trueIndex].number++
        setDeckList([...deckList])
      }
    }

    console.log("DECKLIST :", deckList)
  };


  const removeFromDeck = (card) => {
    setDeckList(deckList.filter(element => element.card.id !== card.id));
  }

  return (
    <div>
      <Header />
      <div className='flex'>
        <BuilderCardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Deck Builder"} selectedFilter={selectedFilter} addCardToDeck={addCardToDeck} />
        {isMenu &&
          <DeckMenu closeMenu={closeMenu} deckList={deckList} removeFromDeck={removeFromDeck} key={deckList} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default DeckBuilderPage