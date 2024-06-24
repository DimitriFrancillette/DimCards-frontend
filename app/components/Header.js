'use client';
import React from 'react';
import Link from 'next/link';
import {
  GiAtomicSlashes,
  GiAnvilImpact,
  GiCardAceSpades,
} from 'react-icons/gi';
import { IoLibrarySharp, IoSettingsSharp } from 'react-icons/io5';
import { FaBoxArchive } from 'react-icons/fa6';
import RegisterModal from './headerComponents/RegisterModal';
import SignInModal from './headerComponents/SignInModal';
import UserModal from './headerComponents/UserModal';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Header = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let user = useSelector((state) => state.user.value);

  let connexionArea;

  if (!user.token) {
    connexionArea = (
      <div className='flex justify-between items-center mt-1 mr-4 min-w-60'>
        <RegisterModal /> or
        <SignInModal />
      </div>
    );
  } else {
    connexionArea = (
      <div className='flex justify-evenly items-center mt-1 mr-4 min-w-60'>
        HELLO {user.username}
        <UserModal />
      </div>
    );
  }
  return (
    <header>
      <div className='bg-sky-700 flex justify-between min-h-14'>
        <div className='flex min-w-80'>
          <Link href='/'>
            <button className='btn no-animation btn-ghost h-full'>
              <GiAtomicSlashes className='size-14 mx-2' />
              <div className='text-2xl font-bold'>Dim's LOR Vault</div>
            </button>
          </Link>
        </div>
        <div className='flex max-w-70'>
          <Link href='/cards'>
            <button className='btn no-animation btn-ghost h-full flex justify-around items-center mx-4'>
              <GiCardAceSpades className='size-10' />
              Cards Gallery
            </button>
          </Link>
          <Link href='/library'>
            <button className='btn no-animation btn-ghost h-full flex justify-around items-center mx-4'>
              <IoLibrarySharp className='size-10' />
              Deck Library
            </button>
          </Link>
          <Link href='/manager'>
            <button className='btn no-animation btn-ghost h-full flex justify-around items-center mx-4'>
              <FaBoxArchive className='size-10' />
              Deck Manager
            </button>
          </Link>
          <Link href='/builder'>
            <button className='btn no-animation btn-ghost h-full flex justify-around items-center mx-4'>
              <GiAnvilImpact className='size-10' />
              Deck Builder
            </button>
          </Link>
        </div>
        {connexionArea}
      </div>
    </header>
  );
};

export default Header;
