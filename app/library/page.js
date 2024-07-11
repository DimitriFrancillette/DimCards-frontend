'use client';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useState, useEffect } from 'react';
import Deck from '../components/Deck.js';

const DecksLibraryPage = () => {
  const [apiDecks, setApiDecks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/decks/public')
      .then((response) => response.json())
      .then((data) => {
        setApiDecks(data.decks);
      });
  }, []);

  let decks;
  if (apiDecks.length > 0) {
    decks = apiDecks.map((data) => {
      return (
        <Deck
          deckId={data._id}
          name={data.name}
          regions={data.regions}
          createdDate={data.created_at}
          cards={data.cards}
          userInfo={data.userId}
        />
      );
    });
  } else {
    decks = <p className='text-4xl font-bold'>There is no public deck yet</p>;
  }

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div>
        <Header />
        <div className='px-4 pt-6'>
          <h2 className='text-5xl font-semibold'>Deck Library</h2>
          <p className='text-lg'>The public decks made by all users </p>
        </div>
      </div>
      <div>
        <div className='flex flex-wrap justify-center items-center gap-6 my-6'>
          {decks}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecksLibraryPage;
