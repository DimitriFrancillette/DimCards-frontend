import { useState, useEffect } from 'react';
import Image from "next/image";

const RegionButton = ({ regionClear, region, selectedRegion, selectedFilter }) => {
    const [isBorderActive, setIsBorderActive] = useState(false);

    //indicate the region name clicked and change the button style to have border
    const handleRegion = (region) => {
        selectedRegion(region);
        setIsBorderActive(!isBorderActive);
    };

    //deactivate the button's border when region clear change
    useEffect(() => {
        setIsBorderActive(false);
    }, [regionClear]);

    //activate the border style when the button is mounted if it had already been selected before
    useEffect(() => {
        if (selectedFilter.region.includes(region)) {
            setIsBorderActive(true)
        }
    }, []);

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