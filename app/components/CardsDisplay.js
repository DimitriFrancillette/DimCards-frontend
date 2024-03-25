'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from "next/image";

const CardsDisplay = () => {
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

  return (
    <div className='pt-6 px-4 basis-4/6 h-screen overflow-y-auto scrollbar-webkit'>
      <h2 className='text-5xl font-semibold'>Cards Gallery</h2>
      <p className='text-lg ml-2'>found 20 cards</p>
      <div className="flex flex-wrap justify-center mt-2">
        {cards}
      </div>
    </div>
  )
}

export default CardsDisplay;