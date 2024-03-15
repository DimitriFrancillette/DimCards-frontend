'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from "next/image";

const CardsPage = () => {
  const [apiCards, setApiCards] = useState([]);
  const fakedata = ["01DE012T1", "01DE017", "01DE022T1", "01DE048", "01FR024T1", "01FR024T3", "01FR028", "01IO009T2", "01IO023", "01IO028T2", "01IO057", "01NX002", "01NX008", "01NX024", "01NX049", "01PZ008T2", "01PZ056T9", "01SI030", "01SI044", "01SI047"]
 
  // useEffect(() => {

  //   fetch('http://localhost:3000/cards')
  //     .then(response => response.json())
  //     .then((data) => {
  //       setApiCards(data.result);
  //       // console.log(data.result)
  //     });
  // }, []);

  // const cards = apiCards.map(data => {
  //   // <img className="w-96" src={data.assets[0].gameAbsolutePath} alt={":x"} />
  //   return <>
  //     <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={":x"} />
  //   </>
  // })

  const cards = fakedata.map(data => {
    const path = `/img/${data}.png`
    return <>
      <Image key={data} className='mx-2' src={path} width={250} height={250} alt={":x"} />
    </>

  })





  return (
    <div>
      <div className='flex'>
        {/* basis-4/6 for the right size with the left filter menu */}
        <div className='mt-6 px-4 basis-4/6'>
          <h2 className='text-5xl font-semibold'>Cards Gallery</h2>
          <p className='text-lg ml-2'>found 20 cards</p>
          <div className="flex flex-wrap justify-center mt-2">
            {cards}
          </div>
        </div>
        
        {/* filter menu */}
        <div className='px-3 basis-2/6 bg-orange-300'>
          <div className='mt-6 flex justify-between'>
            <h3 className='text-2xl'>Filters</h3>
            <div>
              <div className='bg-sky-600 w-10 h-10 rounded-full flex justify-center pt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>
          </div>
          <div className='my-3 flex justify-around'>
            <p>Regions</p> <p>-----------------------</p> <p>Clear</p>
          </div>
          <div className='flex justify-around'>
            <div>
              <div className='my-4'>Bandle City</div>
              <div className='my-4'>Bilgewater</div>
              <div className='my-4'>Demacia</div>
              <div className='my-4'>Freljord</div>
              <div className='my-4'>Ionia</div>
              <div className='my-4'>Noxus</div>
            </div>
            <div>
              <div className='my-4'>Piltover & Zaun</div>
              <div className='my-4'>Runeterran</div>
              <div className='my-4'>Shadow Isles</div>
              <div className='my-4'>Shurima</div>
              <div className='my-4'>Targon</div>
            </div>
          </div>
          <div className='my-3 flex justify-around'>
            <p>Mana Cost</p> <p>-----------------------</p> <p>Clear</p>
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
          <div className='my-3 flex justify-around'>
            <p>Types</p> <p>-----------------------</p> <p>Clear</p>
          </div>
          <div className='flex justify-around'>
            <div>
              <div className='my-4'>Champion</div>
              <div className='my-4'>Follower</div>
              <div className='my-4'>Spell</div>
            </div>
            <div>
              <div className='my-4'>Landmark</div>
              <div className='my-4'>Equipment</div>
            </div>
          </div>
          <div className='my-6 flex justify-around'>
            <p>Rarity</p> <p>-----------------------</p> <p>Clear</p>
          </div>
          <div className='flex justify-around min-h-24'>
            <div className='flex flex-col justify-around'>
              <div>Champion</div>
              <div>Epic</div>
            </div>
            <div className='flex flex-col justify-around'>
              <div>Rare</div>
              <div>Common</div>
            </div>
          </div>
          <div className='my-6 flex justify-around'>
            <p>Keywords</p> <p>-----------------------</p> <p>Clear</p>
          </div>
          <div className='flex justify-center'>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Any card keyword</option>
              <option>Quick Attack</option>
              <option>Elusive</option>
              <option>Slow</option>
              <option>Overwhelm</option>
              <option>Burst</option>
              <option>Regeneration</option>
              <option>Double Attack</option>
              <option>Fearsome</option>
            </select>
          </div>
        </div>
        {/* filter menu */}

      </div>
    </div>
  )
}

export default CardsPage