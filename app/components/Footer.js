import React from 'react'
import Link from 'next/link';
import { GiAtomicSlashes } from "react-icons/gi";
import { GiAnvilImpact } from "react-icons/gi";
import { IoLibrarySharp } from "react-icons/io5";
import { GiCardAceSpades } from "react-icons/gi";
import { FaBoxArchive } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";


const Header = () => {
    return (
        <div className="bg-sky-700 flex justify-center items-center min-h-16">
            <p>© 2024 Dim's LOR Vault</p>
        </div>
    )
}

export default Header