"use client"
import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';


const CardsPage = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    region: [],
    cost: [],
    type: [],
    rarity: [],
    keyword: [],
  });

  const closeFilter = (param) => {
    setIsMenu(param);
  }

  const openMenu = (param) => {
    setIsMenu(param);
  }


  const selected = (param) => {
    console.log("PARAM", param)
    if (param.region) {
      if (param.region === "Clear") {
        setSelectedFilter(prevState => ({ ...prevState, region: [] }));
        return
      }


      if (!selectedFilter.region.includes(param.region)) {
        console.log('REGION FILTER')
        setSelectedFilter(prevState => ({ ...prevState, region: [...prevState.region, param.region] }));
      }
      else {
        setSelectedFilter(prevState => ({ ...prevState, region: prevState.region.filter(e => e !== param.region) }));
      }

    }

    if (param.cost) {
      if (param.cost === "Clear") {
        setSelectedFilter(prevState => ({ ...prevState, cost: [] }));
        return
      }


      if (!selectedFilter.cost.includes(param.cost)) {
        console.log('COST FILTER')
        setSelectedFilter(prevState => ({ ...prevState, cost: [...prevState.cost, param.cost] }));
      }
      else {
        setSelectedFilter(prevState => ({ ...prevState, cost: prevState.cost.filter(e => e !== param.cost) }));
      }
    }

    // if (!selectedFilter.some(obj => obj.region === param.region)) {
    //   setSelectedFilter([...selectedFilter, param])
    // } else {
    //   setSelectedFilter( selectedFilter.filter(e => e.region !== param.region) );
    // }

    // if (param.cost === "Clear") {
    //   setSelectedFilter([]);
    //   return
    // }

  }

  return (
    <div>
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Cards Gallery"} selectedFilter={selectedFilter} />

        {isMenu &&
          <FilterMenu closeFilter={closeFilter} selected={selected} />
        }
      </div>
    </div>
  )
}

export default CardsPage