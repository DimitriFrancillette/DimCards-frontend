'use client';
import CardsDisplay from '../components/CardsDisplay';
import FilterMenu from '../components/FilterMenu';
import { useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const CardsPage = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    region: [],
    cost: [],
    type: [],
    rarity: [],
    keyword: [],
  });

  const handleFilter = (param) => {
    setIsMenu(param);
  };

  const selected = (param) => {
    console.log('PARAM CARD DISPLAY', param);
    if (param.region) {
      if (param.region === 'Clear') {
        setSelectedFilter((prevState) => ({
          ...prevState,
          region: [],
        }));
        return;
      }

      //if region name is not in selectedFiler.region array we had the name in it or we remove it from the array
      !selectedFilter.region.includes(param.region)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            region: [...prevState.region, param.region],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            region: prevState.region.filter((e) => e !== param.region),
          }));
    }

    if (param.cost) {
      if (param.cost === 'Clear') {
        setSelectedFilter((prevState) => ({ ...prevState, cost: [] }));
        return;
      }

      !selectedFilter.cost.includes(param.cost)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            cost: [...prevState.cost, param.cost],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            cost: prevState.cost.filter((e) => e !== param.cost),
          }));
    }

    if (param.type) {
      if (param.type === 'Clear') {
        setSelectedFilter((prevState) => ({ ...prevState, type: [] }));
        return;
      }

      !selectedFilter.type.includes(param.type)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            type: [...prevState.type, param.type],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            type: prevState.type.filter((e) => e !== param.type),
          }));
    }

    if (param.rarity) {
      if (param.rarity === 'Clear') {
        setSelectedFilter((prevState) => ({
          ...prevState,
          rarity: [],
        }));
        return;
      }

      !selectedFilter.rarity.includes(param.rarity)
        ? setSelectedFilter((prevState) => ({
            ...prevState,
            rarity: [...prevState.rarity, param.rarity],
          }))
        : setSelectedFilter((prevState) => ({
            ...prevState,
            rarity: prevState.rarity.filter((e) => e !== param.rarity),
          }));
    }
  };

  return (
    <div>
      <Header />
      <div className='flex'>
        <CardsDisplay
          isMenu={isMenu}
          handleFilter={handleFilter}
          pageName={'Cards Gallery'}
          selectedFilter={selectedFilter}
        />

        {isMenu && (
          <FilterMenu
            handleFilter={handleFilter}
            selected={selected}
            selectedFilter={selectedFilter}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CardsPage;
