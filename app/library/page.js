'use client';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Image from 'next/image.js';
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const DecksLibraryPage = () => {
  const [apiDecks, setApiDecks] = useState([]);
  dayjs.extend(relativeTime);

  useEffect(() => {
    fetch('http://localhost:3000/decks/public')
      .then((response) => response.json())
      .then((data) => {
        console.log('DECKS FROM BACK', data);
        setApiDecks(data.decks);
      });
  }, []);

  let decks = apiDecks.map((data) => {
    const fromNow = dayjs(data.created_at).fromNow();
    return (
      <div className='' key={data._id} name={data.name} regions={data.regions}>
        <div className='w-80 h-80 rounded-box bg-demaciaColor flex flex-col justify-around border-gray-600 border-4'>
          <div className='flex flex-col items-center justify-around my-4'>
            <p className='text-3xl mb-6'>{data.name}</p>
            <p>
              Created by{' '}
              <span className='italic underline'>{data.userId.username}</span>
            </p>
            <div>{fromNow}</div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='divider divider-primary w-4/5'></div>
          </div>
          <div className='flex justify-around'>
            <div>
              <Image
                src={`/img/icon-Demacia.png`}
                width={48}
                height={48}
                alt={`Demacia Icon`}
              />
              <p className='text-center text-gray-100'>13</p>
            </div>
            <div>
              <Image
                src={`/img/icon-Ionia.png`}
                width={48}
                height={48}
                alt={`Ionia Icon`}
              />
              <p className='text-center text-gray-100'>12</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Header />
      <div className='min-h-svh flex flex-col justify-center items-center gap-14'>
        <div className='flex flex-wrap justify-center items-center gap-6'>
          {/* ONE DECK ---------------------------------------------------------- */}
          <div className='w-80 h-80 rounded-box bg-demaciaColor flex flex-col justify-around border-gray-600 border-4'>
            <div className='flex flex-col items-center justify-around my-4'>
              <p className='text-3xl mb-6'>Demacia deck</p>
              <p>
                Created by <span className='italic underline'>Dim</span>
              </p>
              <p>15 minutes ago</p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='divider divider-primary w-4/5'></div>
            </div>
            <div className='flex justify-around'>
              <div>
                <Image
                  src={`/img/icon-Demacia.png`}
                  width={48}
                  height={48}
                  alt={`Demacia Icon`}
                />
                <p className='text-center text-gray-100'>13</p>
              </div>
              <div>
                <Image
                  src={`/img/icon-Ionia.png`}
                  width={48}
                  height={48}
                  alt={`Ionia Icon`}
                />
                <p className='text-center text-gray-100'>12</p>
              </div>
            </div>
          </div>
          {/* ONE DECK ---------------------------------------------------------- */}

          <div className='w-80 h-80 rounded-box bg-freljordColor flex flex-col justify-around border-gray-600 border-4'>
            <div className='flex flex-col items-center my-4'>
              <p className='text-3xl mb-6'>Ash deck</p>
              <p>
                Created by <span className='italic underline'>Dim</span>
              </p>
              <p>2 hours ago</p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='divider divider-primary w-4/5'></div>
            </div>
            <div className='flex justify-around'>
              <div>
                <Image
                  src={`/img/icon-Freljord.png`}
                  width={48}
                  height={48}
                  alt={`Freljord Icon`}
                />
                <p className='text-center text-slate-200'>13</p>
              </div>
              <div>
                <Image
                  src={`/img/icon-BandleCity.png`}
                  width={48}
                  height={48}
                  alt={`BandleCity Icon`}
                />
                <p className='text-center text-slate-200'>12</p>
              </div>
            </div>
          </div>

          <div className='w-80 h-80 rounded-box bg-noxusColor flex flex-col justify-around border-gray-600 border-4'>
            <div className='flex flex-col items-center my-4'>
              <p className='text-3xl mb-6'>Draven Deck</p>
              <p>
                Created by<span className='italic underline'>Dim</span>
              </p>
              <p>1 day ago</p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='divider divider-primary w-4/5'></div>
            </div>
            <div className='flex justify-around'>
              <div>
                <Image
                  src={`/img/icon-Noxus.png`}
                  width={48}
                  height={48}
                  alt={`Noxus Icon`}
                />
                <p className='text-center text-slate-200'>28</p>
              </div>
              <div>
                <Image
                  src={`/img/icon-Targon.png`}
                  width={48}
                  height={48}
                  alt={`Targon Icon`}
                />
                <p className='text-center text-slate-200'>12</p>
              </div>
            </div>
          </div>

          <div className='w-80 h-80 rounded-box bg-shadowislesColor flex flex-col justify-around border-gray-600 border-4'>
            <div className='flex flex-col items-center my-4'>
              <p className='text-3xl mb-6'>Undying DECK</p>
              <p>
                Created by <span className='italic underline'>Dim</span>
              </p>
              <p>2 days ago</p>
            </div>
            <div className='w-full flex justify-center'>
              <div className='divider divider-primary w-4/5'></div>
            </div>
            <div className='flex justify-around'>
              <div>
                <Image
                  src={`/img/icon-ShadowIsles.png`}
                  width={48}
                  height={48}
                  alt={`ShadowIsles Icon`}
                />
                <p className='text-center text-slate-200'>15</p>
              </div>
              <div>
                <Image
                  src={`/img/icon-Shurima.png`}
                  width={48}
                  height={48}
                  alt={`Shurima Icon`}
                />
                <p className='text-center text-slate-200'>25</p>
              </div>
            </div>
          </div>
          {decks}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecksLibraryPage;
