import React from 'react'
import { GiAtomicSlashes } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { IoLibrarySharp } from "react-icons/io5";
import { GiCardAceSpades } from "react-icons/gi";
import { FaBoxArchive } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";


const Header = () => {
    return (
        <div className="bg-sky-700 flex justify-between min-h-16">
            <div className='flex min-w-80'>
                <GiAtomicSlashes className='size-14 mx-2' />
                <div className='text-2xl pt-4 font-bold'>
                    Dim's LOR Vault
                </div>
            </div>
            <div className='flex max-w-70'>
                <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                    <GiCardAceSpades className='size-8' />
                    Cards Gallery
                </div>
                <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                    <IoLibrarySharp className='size-8' />
                    Deck Library
                </div>
                <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                    <FaBoxArchive className='size-8' />
                    Deck Manager
                </div>
                <div className='flex justify-around mt-3.5 min-w-40 mx-4'>
                    <GiAnvilImpact className='size-8' />
                    Deck Builder
                </div>
            </div>
            <div>
                <div className='mt-3.5 mr-3'>
                    <IoSettingsSharp className='size-8' />
                </div>
            </div>
        </div>
    )
}

export default Header