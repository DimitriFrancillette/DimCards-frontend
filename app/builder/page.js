"use client"
import CardsDisplay from '../components/CardsDisplay';
import DeckMenu from "../components/DeckMenu";
import { useState } from 'react';

const DeckBuilderPage = () => {
  const [isMenu, setIsMenu] = useState(true);

  const closeMenu = (param) => {
    setIsMenu(param);
  }

  const openMenu = (param) => {
    setIsMenu(param);
  }

  return (
    <div>
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Deck Builder"} />
        {isMenu &&
          <DeckMenu closeMenu={closeMenu} />
        }
      </div>
    </div>
  )
}

export default DeckBuilderPage