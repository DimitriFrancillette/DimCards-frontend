'use client';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useState, useEffect } from 'react';
import Deck from '../components/Deck.js';
import { useSelector } from 'react-redux';

const DecksManagerPage = () => {
  const [apiDecks, setApiDecks] = useState([]);
  const [isUser, setIsUser] = useState('');

  let user = useSelector((state) => state.user.value);

  if (user.username !== null && isUser === '') {
    setIsUser(user.username);
  }

  useEffect(() => {
    fetch(`http://localhost:3000/decks//user/${user.userId}`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || 'Network response was not ok');
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.decks) {
          setApiDecks(data.decks);
        }
      })
      .catch((error) => {
        console.log('catch', error.message);
      });
  }, [isUser]);

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
    decks = (
      <p className='text-4xl font-bold'>Sign In to see your deck collection</p>
    );
  }

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div>
        <Header />
        <div className='px-4 pt-6'>
          <h2 className='text-5xl font-semibold'>Decks Manager</h2>
          <p className='text-lg'>The list of a user's decks</p>
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

export default DecksManagerPage;
