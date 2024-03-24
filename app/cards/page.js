'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from "next/image";

const CardsPage = () => {
  const [apiCards, setApiCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);
  
  useEffect(() => {

    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then((data) => {
        setShownCards(data.result);
        setApiCards(data.result);
      });

  }, []);

  let cards = shownCards.map(data => {
    return <>
      <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} />
    </>
  })



  // const fakedata = ["01DE012T1", "01DE017", "01DE022T1", "01DE048", "01FR024T1", "01FR024T3", "01FR028", "01IO009T2", "01IO023", "01IO028T2", "01IO057", "01NX002", "01NX008", "01NX024", "01NX049", "01PZ008T2", "01PZ056T9", "01SI030", "01SI044", "01SI047"]
  // const cards = fakedata.map(data => {
  //   const path = `/img/${data}.png`
  //   return <div key={data} >
  //     <Image className='mx-2' src={path} width={250} height={250} alt={":x"} />
  //   </div>

  // })

  const handleClick = (region) => {
    const filteredCards = apiCards.filter((card)=> {return card.regions.includes(region) === true});
    // console.log("filtered CARDS",filteredCards);
    setShownCards(filteredCards)
	}




  return (
    <div>
      <div className='flex'>
        {/* basis-4/6 for the right size with the left filter menu */}
        <div className='pt-6 px-4 basis-4/6 h-screen overflow-y-auto scrollbar-webkit'>
          <h2 className='text-5xl font-semibold'>Cards Gallery</h2>
          <p className='text-lg ml-2'>found 20 cards</p>
          <div className="flex flex-wrap justify-center mt-2">
            {cards}
          </div>
        </div>

        {/* filter menu */}
        <div className='px-3 basis-2/6 bg-cyan-700/75 h-screen overflow-y-auto no-scrollbar pb-6'>
          <div className='mt-6 flex justify-between'>
            <h3 className='text-2xl'>Filters</h3>
            <div>
              <div className='bg-sky-600 w-10 h-10 rounded-full flex justify-center pt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>
          </div>
          <div className='my-3 flex justify-around items-center'>
            <div className="divider divider-start divider-primary" style={{ width: '80%' }}>Regions</div>
            <p>Clear</p>
          </div>
          <div className='flex justify-around'>
            <div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("BandleCity")}>
                <Image className='mr-2' src={'/img/icon-bandlecity.png'} width={24} height={24} alt={"Bandle City Icon"} />
                Bandle City
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Bilgewater")}>
                <Image className='mr-2' src={'/img/icon-bilgewater.png'} width={24} height={24} alt={"Bilgewater Icon"} />
                Bilgewater
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Demacia")}>
                <Image className='mr-2' src={'/img/icon-demacia.png'} width={24} height={24} alt={"Demacia Icon"} />
                Demacia
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Freljord")}>
                <Image className='mr-2' src={'/img/icon-freljord.png'} width={24} height={24} alt={"Freljord Icon"} />
                Freljord
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Ionia")}>
                <Image className='mr-2' src={'/img/icon-ionia.png'} width={24} height={24} alt={"Ionia Icon"} />
                Ionia
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Noxus")}>
                <Image className='mr-2' src={'/img/icon-noxus.png'} width={24} height={24} alt={"Noxus Icon"} />
                Noxus
              </div>
            </div>
            <div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("PiltoverZaun")}>
                <Image className='mr-2' src={'/img/icon-piltoverzaun.png'} width={24} height={24} alt={"Piltover & Zaun Icon"} />
                Piltover & Zaun
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Runeterran")}>
                <Image className='mr-2' src={'/img/icon-runeterra.png'} width={24} height={24} alt={"Runeterran Icon"} />
                Runeterran
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("ShadowIsles")}>
                <Image className='mr-2' src={'/img/icon-shadowisles.png'} width={24} height={24} alt={"Shadow Isles Icon"} />
                Shadow Isles
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Shurima")}>
                <Image className='mr-2' src={'/img/icon-shurima.png'} width={24} height={24} alt={"Shurima Icon"} />
                Shurima
              </div>
              <div className='my-4 flex min-w-28' onClick={() => handleClick("Targon")}>
                <Image className='mr-2' src={'/img/icon-targon.png'} width={24} height={24} alt={"Targon Icon"} />
                Targon
              </div>
            </div>
          </div>
          <div className='my-3 flex justify-around items-center'>
            <div className="divider divider-start" style={{ width: '80%' }}>Mana Cost</div>
            <p>Clear</p>
          </div>
          <div className='flex justify-around'>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>0</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>1</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>2</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>3</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>4</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>5</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>6</p>
            </div>
            <div className='bg-sky-600 w-9 h-9 rounded-full flex justify-center pt-1.5'>
              <p>7+</p>
            </div>
          </div>
          <div className='my-3 flex justify-around items-center'>
            <div className="divider divider-start" style={{ width: '80%' }}>Types</div>
            <p>Clear</p>
          </div>
          <div className='flex justify-around'>
            <div>
              <div className='my-4 flex min-w-28'>
                <Image className='mr-2' src={'/img/icon-champion.svg'} width={24} height={24} alt={"Champion Icon"} />
                Champion
              </div>
              <div className='my-4 flex min-w-28'>
                <Image className='mr-2' src={'/img/icon-unit.svg'} width={24} height={24} alt={"Follower Icon"} />
                Follower
              </div>
              <div className='my-4 flex min-w-28'>
                <Image className='mr-2' src={'/img/icon-spell.svg'} width={24} height={24} alt={"Spell Icon"} />
                Spell
              </div>
            </div>
            <div>
              <div className='my-4 flex min-w-28'>
                <Image className='mr-2' src={'/img/icon-landmark.svg'} width={24} height={24} alt={"Landmark Icon"} />
                Landmark
              </div>
              <div className='my-4 flex min-w-28'>
                <Image className='mr-2' src={'/img/icon-equipment.svg'} width={24} height={24} alt={"Equipment Icon"} />
                Equipment
              </div>
            </div>
          </div>
          <div className='my-3 flex justify-around items-center'>
            <div className="divider divider-start" style={{ width: '80%' }}>Rarity</div>
            <p>Clear</p>
          </div>

          <div className='flex justify-around min-h-24'>
            <div className='flex flex-col justify-around'>
              <div className='flex'>
                <Image className='mr-2' src={'/img/champion.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                Champion
              </div>
              <div className='flex'>
                <Image className='mr-2' src={'/img/epic.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                Epic
              </div>
            </div>
            <div className='flex flex-col justify-around'>
              <div className='flex'>
                <Image className='mr-2' src={'/img/rare.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                Rare
              </div>
              <div className='flex'>
                <Image className='mr-2' src={'/img/common.svg'} width={24} height={24} alt={"Champion rarity icone"} />
                Common
              </div>
            </div>
          </div>

          <div className='my-3 flex justify-around items-center'>
            <div className="divider divider-start" style={{ width: '80%' }}>Keywords</div>
            <p>Clear</p>
          </div>

          <div className='flex justify-center'>
            <select defaultValue="Any card keyword" className="select select-bordered w-full max-w-xs">
              <option value="Any card keyword" disabled>Any card keyword</option>
              <option value="Quick Attack">Quick Attack</option>
              <option value="Elusive">Elusive</option>
              <option value="Slow">Slow</option>
              <option value="Overwhelm">Overwhelm</option>
              <option value="Burst">Burst</option>
              <option value="Regeneration">Regeneration</option>
              <option value="Double Attack">Double Attack</option>
              <option value="Fearsome">Fearsome</option>
            </select>
          </div>
        </div>
        {/* filter menu */}

      </div>
    </div>
  )
}

export default CardsPage