'use client';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useSelector } from 'react-redux';

const DecksManagerPage = () => {
  const TEST = useSelector((state) => state.user.value.username);

  return (
    <div>
      <Header />
      {TEST}
      <div className='min-h-svh text-2xl font-bold flex justify-center items-center text-fuchsia-900'>
        Decks Manager Page UNDER CONSTRUCTION
      </div>
      <Footer />
    </div>
  );
};

export default DecksManagerPage;
