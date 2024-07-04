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

  let decks = apiDecks.map((data) => {
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

  return (
    <div>
      <Header />
      <div className='min-h-svh flex flex-col justify-center items-center gap-14'>
        <div className='flex flex-wrap justify-center items-center gap-6'>
          {decks}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DecksLibraryPage;
