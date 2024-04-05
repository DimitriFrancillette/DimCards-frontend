import { useState, useEffect } from 'react';
import Image from "next/image";

const RarityButton = ({ selectedRarity, rarityClear, rarity }) => {
    const [ghostButton, setGhostButton] = useState("btn btn-ghost justify-start");

    const handleRarity = (rarity) => {
        selectedRarity(rarity);

        if (ghostButton === "btn btn-ghost justify-start") {
            setGhostButton("btn btn-ghost justify-start btn-outline border-yellow-500")
        } else {
            setGhostButton("btn btn-ghost justify-start")
        }
    };

    useEffect(() => {
        setGhostButton("btn btn-ghost justify-start")
    }, [rarityClear])

    let buttonText = rarity;

    return (
        <div>
            <button className={ghostButton} onClick={() => handleRarity(rarity)}>
                <Image src={`/img/icon-${rarity}.svg`} className='mr-2' width={24} height={24} alt={`${rarity} rarity Icon`} />
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default RarityButton