"use client"
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


  const closeMenu = (param) => {
    setIsMenu(param);
  }

  const openMenu = (param) => {
    setIsMenu(param);
  }

  const selected = (param) => {
    setSelectedFilter([...selectedFilter, param])
  }

  return (
    <div>
      <Header />
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Deck Builder"} selectedFilter={selectedFilter} />
        {isMenu &&
          <DeckMenu closeMenu={closeMenu} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default DeckBuilderPage