import Image from 'next/image.js';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const Deck = ({ deckId, name, regions, createdDate, cards, userInfo }) => {
  dayjs.extend(relativeTime);

  const timePassed = dayjs(createdDate).fromNow();
  const lowerCaseRegion = regions[0].toLowerCase();
  const regionStyles = {
    demacia:
      'w-80 h-80 rounded-box bg-demaciaColor flex flex-col justify-around border-gray-600 border-4',
    noxus:
      'w-80 h-80 rounded-box bg-noxusColor flex flex-col justify-around border-gray-600 border-4',
    piltoverzaun:
      'w-80 h-80 rounded-box bg-piltoverzaunColor flex flex-col justify-around border-gray-600 border-4',
    freljord:
      'w-80 h-80 rounded-box bg-freljordColor flex flex-col justify-around border-gray-600 border-4',
    ionia:
      'w-80 h-80 rounded-box bg-ioniaColor flex flex-col justify-around border-gray-600 border-4',
    shadowisles:
      'w-80 h-80 rounded-box bg-shadowislesColor flex flex-col justify-around border-gray-600 border-4',
    bilgewater:
      'w-80 h-80 rounded-box bg-bilgewaterColor flex flex-col justify-around border-gray-600 border-4',
    shurima:
      'w-80 h-80 rounded-box bg-shurimaColor flex flex-col justify-around border-gray-600 border-4',
    bandlecity:
      'w-80 h-80 rounded-box bg-bandlecityColor flex flex-col justify-around border-gray-600 border-4',
    targon:
      'w-80 h-80 rounded-box bg-targonColor flex flex-col justify-around border-gray-600 border-4',
    runeterra:
      'w-80 h-80 rounded-box bg-runeterraColor flex flex-col justify-around border-gray-600 border-4',
  };

  const firstRegion = regions[0];
  const secondRegion = regions[1];
  let firstRegionCount = 0;
  let secondRegionCount = 0;

  for (const card of cards) {
    if (card.regionRefs[0] === firstRegion) {
      firstRegionCount += card.number;
    }

    if (card.regionRefs[0] === secondRegion) {
      secondRegionCount += card.number;
    }
  }

  return (
    <div key={deckId} name={name} regions={regions}>
      <div className={regionStyles[lowerCaseRegion]}>
        <div className='flex flex-col items-center justify-around my-4'>
          <p className='text-3xl mb-6'>{name}</p>
          <p>
            Created by{' '}
            <span className='italic underline'>{userInfo.username}</span>
          </p>
          <div>{timePassed}</div>
        </div>
        <div className='w-full flex justify-center'>
          <div className='divider divider-primary w-4/5'></div>
        </div>
        <div className='flex justify-around'>
          <div>
            <Image
              src={`/img/icon-${firstRegion}.png`}
              width={48}
              height={48}
              alt={`${firstRegion} Icon`}
            />
            <p className='text-center text-gray-100'>{firstRegionCount}</p>
          </div>
          <div>
            <Image
              src={`/img/icon-${secondRegion}.png`}
              width={48}
              height={48}
              alt={`${secondRegion} Icon`}
            />
            <div className='text-center text-gray-100'>{secondRegionCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
