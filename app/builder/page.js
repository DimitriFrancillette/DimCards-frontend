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

  //* IM HERE-----------------------------------------------------------
  [{
    id: 6565656,
    card: {},
    number: 0
}]

  const addToDeck = (card) => {
    // console.log("CARD ARRIVE ON PAGE",card);

    // si card dans deckList et pas à 3, on up le nombre

    // si card dans deckList et à 3, on ne change rien

    // si card pas dans deck list, on le rajoute



    setDeckList([...deckList, {card, number:1} ]);
  };


  //* IM HERE-------------------------------------------------------------------


  const removeFromDeck = (card) => {
    console.log("used")
    setDeckList(deckList.filter(element => element.id !== card.id));
  }

  return (
    <div>
      <Header />
      <div className='flex'>
        <BuilderCardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Deck Builder"} selectedFilter={selectedFilter} addToDeck={addToDeck} />
        {isMenu &&
          <DeckMenu closeMenu={closeMenu} deckList={deckList} removeFromDeck={removeFromDeck} key={deckList} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default DeckBuilderPage