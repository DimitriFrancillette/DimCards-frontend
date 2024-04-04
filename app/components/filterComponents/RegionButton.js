import { useState } from 'react';
import Image from "next/image";

const RegionButton = (props) => {
    const [ghostButton, setGhostButton] = useState("btn btn-ghost justify-start");

    const handleRegion = (region) => {
        props.selectedRegion(region);

        if (ghostButton === "btn btn-ghost justify-start") {
            setGhostButton("btn btn-ghost justify-start btn-outline")
        } else {
            setGhostButton("btn btn-ghost justify-start")
        }
    };

    let buttonText = props.region;
    if (buttonText === 'BandleCity') { buttonText = 'Bandle City' };
    if (buttonText === 'PiltoverZaun') { buttonText = 'Piltover & Zaun' };
    if (buttonText === 'ShadowIsles') { buttonText = 'Shadow Isles' };

    return (
        <div>
            <button className={ghostButton} onClick={() => handleRegion(props.region)}>
                <Image src={`/img/icon-${props.region}.png`} width={24} height={24} alt={`${props.region} Icon`} />
                <div>{buttonText}</div>
            </button>
        </div>
    )
}

export default RegionButton