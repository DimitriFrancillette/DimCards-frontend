"use client"
import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';
import { useState, useEffect } from 'react';


const CardsPage = () => {
  const [isFilterMenu, setIsFilterMenu] = useState(false);

  const closeFilter = (param) => {
    setIsFilterMenu(param);
  }

  const openFilter = (param) => {
    setIsFilterMenu(param);
  }

  return (
    <div>
      <div className='flex'>
        <CardsDisplay isFilterMenu={isFilterMenu} openFilter={openFilter}/>

        {isFilterMenu &&
          <FilterMenu closeFilter={closeFilter} />
        }
      </div>
    </div>
  )
}

export default CardsPage