import { useState, useEffect } from 'react';
import Image from "next/image";

const TypeButton = ({ selectedType, typeClear, type }) => {
    const [isBorderActive, setIsBorderActive] = useState(false);

    const handleType = (type) => {
        selectedType(type);
        setIsBorderActive(!isBorderActive);
    };

    useEffect(() => {
        setIsBorderActive(false);
    }, [typeClear])

    let buttonText = type;
    if (buttonText === 'Unit') { buttonText = 'Follower' };

    return (
        <div>
            <button className={isBorderActive ? "btn btn-ghost justify-start btn-outline border-yellow-500" : "btn btn-ghost justify-start"} onClick={() => handleType(type)}>
                <Image src={`/img/icon-${type}.svg`} className='mr-2' width={24} height={24} alt={`${type} Icon`} />
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default TypeButton