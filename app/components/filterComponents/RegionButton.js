import { useState, useEffect } from 'react';
import Image from "next/image";

const RegionButton = ({ regionClear, region, selectedRegion }) => {
    const [isBorderActive, setIsBorderActive] = useState(false);

    const handleRegion = (region) => {
        selectedRegion(region);
        setIsBorderActive(!isBorderActive);
    };

    useEffect(() => {
        setIsBorderActive(false);
    }, [regionClear])

    let buttonText = region;
    if (buttonText === 'BandleCity') { buttonText = 'Bandle City' };
    if (buttonText === 'PiltoverZaun') { buttonText = 'Piltover & Zaun' };
    if (buttonText === 'ShadowIsles') { buttonText = 'Shadow Isles' };

    return (
        <div>
            <button className={isBorderActive ? "btn btn-ghost justify-start btn-outline border-yellow-500" : "btn btn-ghost justify-start"} onClick={() => handleRegion(region)}>
                <Image src={`/img/icon-${region}.png`} width={24} height={24} alt={`${region} Icon`} />
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default RegionButton