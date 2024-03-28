"use client"
import CardsDisplay from '../components/CardsDisplay';
import DeckMenu from "../components/DeckMenu";
import { useState } from 'react';

const DeckBuilderPage = () => {
  const [isMenu, setIsMenu] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState([]);


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
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Deck Builder"} selectedFilter={selectedFilter}/>
        {isMenu &&
          <DeckMenu closeMenu={closeMenu} />
        }
      </div>
    </div>
  )
}

export default DeckBuilderPage