"use client"
import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

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
        setSelectedFilter(prevState => ({ ...prevState, cost: [...prevState.cost, param.cost] }));
      }
      else {
        setSelectedFilter(prevState => ({ ...prevState, cost: prevState.cost.filter(e => e !== param.cost) }));
      }
    }

    if (param.type) {
      if (param.type === "Clear") {
        setSelectedFilter(prevState => ({ ...prevState, type: [] }));
        return
      }


      if (!selectedFilter.type.includes(param.type)) {
        setSelectedFilter(prevState => ({ ...prevState, type: [...prevState.type, param.type] }));
      }
      else {
        setSelectedFilter(prevState => ({ ...prevState, type: prevState.type.filter(e => e !== param.type) }));
      }
    }

    if (param.rarity) {
      if (param.rarity === "Clear") {
        setSelectedFilter(prevState => ({ ...prevState, rarity: [] }));
        return
      }


      if (!selectedFilter.rarity.includes(param.rarity)) {
        setSelectedFilter(prevState => ({ ...prevState, rarity: [...prevState.rarity, param.rarity] }));
      }
      else {
        setSelectedFilter(prevState => ({ ...prevState, rarity: prevState.rarity.filter(e => e !== param.rarity) }));
      }
    }

  }

  return (
    <div>
      <Header />
      <div className='flex'>
        <CardsDisplay isMenu={isMenu} openMenu={openMenu} pageName={"Cards Gallery"} selectedFilter={selectedFilter} />

        {isMenu &&
          <FilterMenu closeFilter={closeFilter} selected={selected} />
        }
      </div>
      <Footer />
    </div>
  )
}

export default CardsPage