import Image from 'next/image';
import { FaPen } from 'react-icons/fa';
import { useState } from 'react';

const DeckMenu = ({ handleFilter, deckList, removeCardFromDeck }) => {
  const [deckname, setDeckName] = useState('');

  let totalCardsCount = 0;
  let unitCardsCount = 0;
  let spellCardsCount = 0;
  let landmarkCardsCount = 0;
  let equipmentCardsCount = 0;
  let championsCardsCount = 0;

  for (let i = 0; i < deckList.length; i++) {
    totalCardsCount += deckList[i].number;

    if (
      deckList[i].card.type === 'Unit' &&
      deckList[i].card.rarity !== 'Champion'
    ) {
      unitCardsCount += deckList[i].number;
    }

    if (deckList[i].card.type === 'Spell') {
      spellCardsCount += deckList[i].number;
    }

    if (deckList[i].card.rarity === 'Champion') {
      championsCardsCount += deckList[i].number;
    }
  }

  const handleClose = () => {
    handleFilter(true);
  };

  const handleSave = () => {
    console.log('Deck Name', deckname, 'Deck list:', deckList);
  };

  let cardsToShow = deckList.map((data) => {
    const lowerCaseRegion = data.card.regions[0].toLowerCase();
    const regionStyles = {
      demacia:
        'h-12 rounded-2xl bg-gradient-to-r from-demaciaColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      noxus:
        'h-12 rounded-2xl bg-gradient-to-r from-noxusColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      piltoverzaun:
        'h-12 rounded-2xl bg-gradient-to-r from-piltoverzaunColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      freljord:
        'h-12 rounded-2xl bg-gradient-to-r from-freljordColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      ionia:
        'h-12 rounded-2xl bg-gradient-to-r from-ioniaColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      shadowisles:
        'h-12 rounded-2xl bg-gradient-to-r from-shadowislesColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      bilgewater:
        'h-12 rounded-2xl bg-gradient-to-r from-bilgewaterColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      shurima:
        'h-12 rounded-2xl bg-gradient-to-r from-shurimaColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      bandlecity:
        'h-12 rounded-2xl bg-gradient-to-r from-bandlecityColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      targon:
        'h-12 rounded-2xl bg-gradient-to-r from-targonColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
      runeterra:
        'h-12 rounded-2xl bg-gradient-to-r from-runeterraColor from-70% to-slate-800 flex justify-between items-center px-4 text-slate-100 hover:opacity-95 hover:border-4 hover:rounded-2xl hover:border-success',
    };

    return (
      <div
        className='cursor-pointer'
        key={data.card.id}
        name={data.card.name}
        regions={data.card.regions}
        cost={data.card.cost}
        type={data.card.type}
        keywords={data.card.keywords}
        rarity={data.card.rarity}
        onClick={() =>
          removeCardFromDeck({
            id: data.card.id,
            name: data.card.name,
            regions: data.card.regions,
            cost: data.card.cost,
            type: data.card.type,
            keywords: data.card.keywords,
            rarity: data.card.rarity,
          })
        }
      >
        <div className={regionStyles[lowerCaseRegion]}>
          <div className='flex items-center min-w-40'>
            <div className='btn-circle btn-xs bg-error flex justify-center items-center mr-4'>
              {data.card.cost}
            </div>
            <div className='text-lg'>{data.card.name}</div>
          </div>
          <div className='btn-square btn-xs bg-slate-500 flex justify-center items-center'>
            {data.number}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='px-3 w-1/5 bg-cyan-700/75 h-screen overflow-y-auto no-scrollbar pb-6'>
      <div className='my-6 flex justify-between'>
        <h3 className='text-3xl'>Deck</h3>
        <div>
          <div
            className='btn btn-circle bg-success btn-sm hover:bg-success hover:opacity-70'
            onClick={() => handleClose()}
          >
            <svg
              className='swap-off fill-current h-6 w-6'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 512 512'
            >
              <path d='M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z' />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex items-center'>
        <FaPen className='size-6 mr-4' />
        <input
          type='text'
          placeholder='Deck Name'
          className='input input-success w-72 bg-transparent text-xl placeholder-neutral-100'
          onChange={(e) => setDeckName(e.target.value)}
          value={deckname}
        />
      </div>
      <div className='grid grid-cols-6 grid-rows-2 gap-y-2 mt-6 text-lg font-medium'>
        <div
          className={
            championsCardsCount === 6
              ? 'text-center text-success'
              : 'text-center'
          }
        >
          {championsCardsCount}/6
        </div>
        <div className='text-center'>{unitCardsCount}</div>
        <div className='text-center'>{spellCardsCount}</div>
        <div className='text-center'>{landmarkCardsCount}</div>
        <div className='text-center'>{equipmentCardsCount}</div>
        <div
          className={
            totalCardsCount === 40 ? 'text-center text-success' : 'text-center'
          }
        >
          {totalCardsCount}/40
        </div>
        <div className='flex justify-center'>
          <Image
            className='mr-2'
            src={'/img/ichampion.svg'}
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            alt={'Champion Icon'}
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className='mr-2'
            src={'/img/icon-unit.svg'}
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            alt={'Follower Icon'}
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className='mr-2'
            src={'/img/icon-spell.svg'}
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            alt={'Spell Icon'}
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className='mr-2'
            src={'/img/icon-landmark.svg'}
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            alt={'Landmark Icon'}
          />
        </div>
        <div className='flex justify-center'>
          <Image
            className='mr-2 '
            src={'/img/icon-equipment.svg'}
            width={24}
            height={24}
            style={{ width: 'auto', height: 'auto' }}
            alt={'Equipment Icon'}
          />
        </div>
        <div className='flex justify-center'>Total</div>
      </div>

      <div className='mt-8 h-2/3 flex flex-col gap-1 bg-slate-400 pt-2 px-2 rounded-md overflow-y-auto scrollbar-webkit'>
        {cardsToShow}

        {/* --------------CARD IN DECK TESTING WITH backgroundImage */}
        {/* <div className="relative h-14 rounded-2xl overflow-hidden flex items-center text-slate-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-demaciaColor to-transparent from-40% z-10"></div>
                    <div className="relative p-4 flex justify-between items-center w-full z-10">
                        <div className="flex justify-between items-center min-w-40">
                            <div className="btn-circle btn-xs bg-error flex justify-center items-center">
                                2
                            </div>
                            <p className="text-2xl">FIORA</p>
                        </div>
                        <div className="btn-square btn-xs bg-slate-500 flex justify-center items-center">
                            2
                        </div>
                    </div>
                    <div className="absolute w-full h-full left-42">
                        <div>
                            <Image
                                src="http://dd.b.pvp.net/4_12_0/set1/en_us/img/cards/01DE045-full.png"
                                fill
                                objectFit="cover"
                                objectPosition="0% 40%"
                            />
                        </div>
                    </div>
                </div> */}
        {/* --------------CARD IN DECK TESTING WITH backgroundImage */}
      </div>
      <div className='flex justify-center w-full mt-4'>
        <button
          className='btn btn-wide bg-secondary'
          onClick={() => handleSave()}
        >
          Save deck
        </button>
      </div>
    </div>
  );
};

export default DeckMenu;
