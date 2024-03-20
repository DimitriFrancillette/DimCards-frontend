import React from 'react'
import Link from 'next/link';
import { GiAtomicSlashes, GiAnvilImpact, GiCardAceSpades } from "react-icons/gi";
import { IoLibrarySharp, IoSettingsSharp } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";

const Header = () => {
    return (
        <header>
            <div className="bg-sky-700 flex justify-between min-h-16">
                <div className='flex min-w-80'>
                    <Link href="/" className='flex'>
                        <GiAtomicSlashes className='size-14 mx-2' />
                        <div className='text-2xl pt-4 font-bold'>
                            Dim's LOR Vault
                        </div>
                    </Link>
                </div>
                <div className='flex max-w-70'>
                    <Link href="/cards">
                        <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                            <GiCardAceSpades className='size-8' />
                            Cards Gallery
                        </div>
                    </Link>
                    <Link href="/library">
                        <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                            <IoLibrarySharp className='size-8' />
                            Deck Library
                        </div>
                    </Link>
                    <Link href="/manager">
                        <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                            <FaBoxArchive className='size-8' />
                            Deck Manager
                        </div>
                    </Link>
                    <Link href="/builder">
                        <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                            <GiAnvilImpact className='size-8' />
                            Deck Builder
                        </div>
                    </Link>
                </div>
                <div className='min-w-16'>
                    <div className='mt-3.5'>
                        <IoSettingsSharp className='size-8' />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header