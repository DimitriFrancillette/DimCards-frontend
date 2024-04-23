import { useState, useEffect } from 'react';
import Image from "next/image";

const RarityButton = ({ selectedRarity, rarityClear, rarity, selectedFilter }) => {
    const [isBorderActive, setIsBorderActive] = useState(false);

    const handleRarity = (rarity) => {
        selectedRarity(rarity);
        setIsBorderActive(!isBorderActive);
    };

    useEffect(() => {
        setIsBorderActive(false);
    }, [rarityClear]);

    useEffect(() => {
        if (selectedFilter.rarity.includes(rarity)) {
            setIsBorderActive(true)
        }
    }, [])

    let buttonText = rarity;

    return (
        <div>
            <button className={isBorderActive ? "btn btn-ghost justify-start btn-outline border-yellow-500" : "btn btn-ghost justify-start"} onClick={() => handleRarity(rarity)}>
                <Image src={`/img/icon-${rarity}.svg`} className='mr-2' width={24} height={24} alt={`${rarity} rarity Icon`} />
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default RarityButton