"use client"
import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';


const CardsPage = () => {
  const [isMenu, setIsMenu] = useState(false);

  const closeFilter = (param) => {
    setIsMenu(param);
  }

  const openMenu = (param) => {
    setIsMenu(param);
  }

  return (
    <div>
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Cards Gallery"}/>

        {isMenu &&
          <FilterMenu closeFilter={closeFilter} />
        }
      </div>
    </div>
  )
}

export default CardsPage