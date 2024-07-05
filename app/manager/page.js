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
    decks = 'You have to be connected to see all your decks';
  }

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

export default DecksManagerPage;
