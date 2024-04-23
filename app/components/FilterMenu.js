import RegionButton from './filterComponents/RegionButton';
import ManaCostButton from './filterComponents/ManaCostButton';
import TypeButton from './filterComponents/TypeButton';
import RarityButton from './filterComponents/RarityButton';
import ClearButton from './filterComponents/ClearButton';
import { useState } from 'react';

const FilterMenu = ({ handleFilter, selected, selectedFilter }) => {
  const [regionClear, setRegionClear] = useState(false);
  const [costClear, setCostClear] = useState(false);
  const [typeClear, setTypeClear] = useState(false);
  const [rarityClear, setRarityClear] = useState(false);

  const gameRegions = [
    'BandleCity',
    'Bilgewater',
    'Demacia',
    'Freljord',
    'Ionia',
    'Noxus',
    'PiltoverZaun',
    'Runeterran',
    'ShadowIsles',
    'Shurima',
    'Targon',
  ];
  const cardsCosts = [0, 1, 2, 3, 4, 5, 6, 7];
  const cardsTypes = ['Unit', 'Spell', 'Landmark', 'Equipment'];
  const cardsRarity = ['Champion', 'Epic', 'Rare', 'Common'];

  const selectedRegion = (region) => {
    selected({ region });
    region === 'Clear' && setRegionClear(!regionClear);
  };

  const selectedCost = (cost) => {
    selected({ cost });
    cost === 'Clear' && setCostClear(!costClear);
  };

  const selectedType = (type) => {
    selected({ type });
    type === 'Clear' && setTypeClear(!typeClear);
  };

  const selectedRarity = (rarity) => {
    selected({ rarity });
    rarity === 'Clear' && setRarityClear(!rarityClear);
  };

  const handleClose = () => {
    handleFilter(false);
  };

  const regionButtons = gameRegions.map((regionName) => {
    return (
      <RegionButton
        selectedRegion={selectedRegion}
        regionClear={regionClear}
        region={regionName}
        selectedFilter={selectedFilter}
      />
    );
  });

  const manaButtons = cardsCosts.map((costMana) => {
    return (
      <ManaCostButton
        selectedCost={selectedCost}
        costClear={costClear}
        cost={costMana}
        selectedFilter={selectedFilter}
      />
    );
  });

  const typeButtons = cardsTypes.map((typeName) => {
    return (
      <TypeButton
        selectedType={selectedType}
        typeClear={typeClear}
        type={typeName}
        selectedFilter={selectedFilter}
      />
    );
  });

  const rarityButtons = cardsRarity.map((rarityName) => {
    return (
      <RarityButton
        selectedRarity={selectedRarity}
        rarityClear={rarityClear}
        rarity={rarityName}
        selectedFilter={selectedFilter}
      />
    );
  });

  return (
    <div className='px-3 w-1/5 bg-cyan-700/75 h-screen overflow-y-auto no-scrollbar pb-6'>
      <div className='mt-6 flex justify-between'>
        <h3 className='text-3xl'>Filters</h3>
        <div>
          <button
            className='btn btn-circle bg-success btn-sm hover:bg-success hover:opacity-70'
            onClick={() => handleClose()}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='my-3 flex justify-around items-center'>
        <div
          className='divider divider-start divider-primary text-xl'
          style={{ width: '80%' }}
        >
          Regions
        </div>
        <ClearButton selectedFunction={selectedRegion} />
      </div>
      <div className='grid grid-cols-2 gap-y-2 justify-items-center'>
        {regionButtons}
      </div>
      <div className='my-3 flex justify-around items-center'>
        <div
          className='divider divider-start divider-primary text-xl'
          style={{ width: '80%' }}
        >
          Mana Cost
        </div>
        <ClearButton selectedFunction={selectedCost} />
      </div>
      <div className='flex justify-around'>{manaButtons}</div>
      <div className='my-3 flex justify-around items-center'>
        <div
          className='divider divider-start divider-primary text-xl'
          style={{ width: '80%' }}
        >
          Types
        </div>
        <ClearButton selectedFunction={selectedType} />
      </div>
      <div className='grid grid-cols-2 gap-y-2 justify-items-center'>
        {typeButtons}
      </div>
      <div className='my-3 flex justify-around items-center'>
        <div
          className='divider divider-start divider-primary text-xl'
          style={{ width: '80%' }}
        >
          Rarity
        </div>
        <ClearButton selectedFunction={selectedRarity} />
      </div>

      <div className='grid grid-cols-2 gap-y-2 justify-items-center'>
        {rarityButtons}
      </div>

      <div className='my-3 flex justify-around items-center'>
        <div
          className='divider divider-start divider-primary text-xl'
          style={{ width: '80%' }}
        >
          Keywords
        </div>
        <button
          className='btn btn-ghost font-extrabold text-lg'
          onClick={() => console.log('Clear Keywords')}
        >
          Clear
        </button>
      </div>

      <div className='flex justify-center'>
        <select
          defaultValue='Any card keyword'
          className='select select-bordered w-full max-w-xs'
        >
          <option value='Any card keyword' disabled>
            Any card keyword
          </option>
          <option value='Quick Attack'>Quick Attack</option>
          <option value='Elusive'>Elusive</option>
          <option value='Slow'>Slow</option>
          <option value='Overwhelm'>Overwhelm</option>
          <option value='Burst'>Burst</option>
          <option value='Regeneration'>Regeneration</option>
          <option value='Double Attack'>Double Attack</option>
          <option value='Fearsome'>Fearsome</option>
        </select>
      </div>
    </div>
  );
};

export default FilterMenu;
