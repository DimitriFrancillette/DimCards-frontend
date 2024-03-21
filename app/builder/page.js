import React from 'react';
import Image from "next/image";
import { FaPen } from "react-icons/fa";

const DeckBuilderPage = () => {

  const fakedata = ["01DE012T1", "01DE017", "01DE022T1", "01DE048", "01FR024T1", "01FR024T3", "01FR028", "01IO009T2", "01IO023", "01IO028T2", "01IO057", "01NX002", "01NX008", "01NX024", "01NX049", "01PZ008T2", "01PZ056T9", "01SI030", "01SI044", "01SI047"]

  const cards = fakedata.map(data => {
    const path = `/img/${data}.png`
    return <div key={data} >
      <Image className='mx-2' src={path} width={250} height={250} alt={":x"} />
    </div>

  })



  return (
    <div>
      <div className='flex'>
        {/* basis-4/6 for the right size with the left filter menu */}
        <div className='pt-6 px-4 basis-4/6 h-screen overflow-y-auto no-scrollbar'>
          <h2 className='text-5xl font-semibold'>Deck Builder</h2>
          <p className='text-lg ml-2'>found 20 cards</p>
          <div className="flex flex-wrap justify-center mt-2">
            {cards}
          </div>
        </div>

        {/* DECK menu */}
        <div className='px-3 basis-2/6 bg-cyan-700/75 h-screen overflow-y-auto pb-6'>
          <div className='mt-6 flex justify-between'>
            <div className='flex items-center'>
              <FaPen className='size-6 mr-4' />
              <h3 className='text-2xl'>Deck Name</h3>
            </div>
            <div>
              <div className='bg-sky-600 w-10 h-10 rounded-full flex justify-center pt-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-6 grid-rows-2 gap-y-2 mt-6 text-lg font-medium'>
            <div className='text-center'>6/6</div>
            <div className='text-center'>4</div>
            <div className='text-center'>14</div>
            <div className='text-center'>11</div>
            <div className='text-center'>5</div>
            <div className='text-center'>40/40</div>
            <div className='flex justify-center'>
              <Image className='mr-2' src={'/img/icon-champion.svg'} width={24} height={24} alt={"Champion Icon"} />
            </div>
            <div className='flex justify-center'>
            <Image className='mr-2' src={'/img/icon-unit.svg'} width={24} height={24} alt={"Follower Icon"} />
            </div>
            <div className='flex justify-center'>
            <Image className='mr-2' src={'/img/icon-spell.svg'} width={24} height={24} alt={"Spell Icon"} />
            </div>
            <div className='flex justify-center'>
            <Image className='mr-2' src={'/img/icon-landmark.svg'} width={24} height={24} alt={"Landmark Icon"} />
            </div>
            <div className='flex justify-center'>
            <Image className='mr-2 ' src={'/img/icon-equipment.svg'} width={24} height={24} alt={"Equipment Icon"} />
            </div>
            <div className='flex justify-center'>
              Total
            </div>
          </div>

        </div>
        {/* DECK menu */}

      </div>
    </div>
  )
}

export default DeckBuilderPage