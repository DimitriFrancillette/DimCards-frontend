import { useState, useEffect } from 'react';
import Image from "next/image";

const TypeButton = ({ selectedType, typeClear, type }) => {
    const [ghostButton, setGhostButton] = useState("btn btn-ghost justify-start");

    const handleType = (type) => {
        selectedType(type);

        if (ghostButton === "btn btn-ghost justify-start") {
            setGhostButton("btn btn-ghost justify-start btn-outline border-yellow-500")
        } else {
            setGhostButton("btn btn-ghost justify-start")
        }
    };

    useEffect(() => {
        setGhostButton("btn btn-ghost justify-start")
    }, [typeClear])

    let buttonText = type;
    if (buttonText === 'Unit') { buttonText = 'Follower' };

    return (
        <div>
            <button className={ghostButton} onClick={() => handleType(type)}>
                <Image src={`/img/icon-${type}.svg`} className='mr-2' width={24} height={24} alt={`${type} Icon`} />
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default TypeButton