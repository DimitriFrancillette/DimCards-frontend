"use client"
import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';


const CardsPage = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const closeFilter = (param) => {
    setIsMenu(param);
  }

  const openMenu = (param) => {
    setIsMenu(param);
  }
  
  const selected = (param) => {
    if(param === "Clear") {
      setSelectedFilter([]);
      return
    }
    setSelectedFilter([...selectedFilter, param])
  }

  return (
    <div>
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Cards Gallery"} selectedFilter={selectedFilter}/>

        {isMenu &&
          <FilterMenu closeFilter={closeFilter} selected={selected} />
        }
      </div>
    </div>
  )
}

export default CardsPage