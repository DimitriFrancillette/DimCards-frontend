import { useState, useEffect } from 'react';
import Image from "next/image";

const BuilderCardsDisplay = ({ isMenu, openMenu, pageName, selectedFilter, addCardToDeck, deckList }) => {
    const [apiCards, setApiCards] = useState([]);
    const [shownCards, setShownCards] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3000/cards')
            .then(response => response.json())
            .then((data) => {
                console.log("FETCH", data.result)
                setShownCards(data.result);
                setApiCards(data.result);
            });
    }, []);

    let cards = shownCards.map(data => {
        
        const findCardInDeck = deckList.find(e => e.card.id === data._id);
        
        const circles = []
        for (let i = 0; i < 3; i++) {
            let style = 'rounded-full bg-slate-400 border-black w-4 h-4 border-2';
            if (findCardInDeck !== undefined && i < findCardInDeck.number) {
                style = 'rounded-full bg-amber-400 border-black w-4 h-4 border-2';
            }
            circles.push(<div className={style} />)
        }

        return <div
            className='flex flex-col items-center mb-4 cursor-pointer'
            key={data._id}
            name={data.name}
            regions={data.regions}
            cost={data.cost} type={data.type}
            keywords={data.keywords}
            rarity={data.rarity}
            onClick={() => addCardToDeck({
                id: data._id,
                name: data.name,
                regions: data.regions,
                cost: data.cost,
                type: data.type,
                keywords: data.keywords,
                rarity: data.rarity,
            })}
        >
            <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} style={{ width: "auto", height: "auto" }} />
            <div className='flex gap-1'>
                {circles}
            </div>
        </div>
    });

    const filter = selectedFilter;

    if (filter.region.length > 0 || filter.cost.length > 0 || filter.type.length > 0 || filter.rarity.length > 0) {
        let cardsToDisplay = [];

        //FILTER THE CARDS BY REGION
        for (const element of filter.region) {
            const filteredRegionCards = apiCards.filter((card) => {
                return card.regions.includes(element) === true
            });
            cardsToDisplay = cardsToDisplay.concat(filteredRegionCards)
        };

        //FILTER THE CARDS BY COST AND CHECK IF THE CARDS ARE NOT ALREADY SELECTED TO BE DISPLAY
        for (const element of filter.cost) {

            const filteredCostCards = apiCards.filter((card) => {
                if (element === 7) {
                    return card.cost === 7 || card.cost > 7
                }
                return card.cost === element
            });

            const cardsAlreadyDisplayed = [];

            for (let i = filteredCostCards.length - 1; i >= 0; i--) {

                cardsToDisplay.forEach(newCard => {
                    if (!cardsAlreadyDisplayed.includes(newCard._id)) {
                        cardsAlreadyDisplayed.push(newCard._id);
                    };
                });

                if (cardsAlreadyDisplayed.includes(filteredCostCards[i]._id)) {
                    const indexToRemove = filteredCostCards.findIndex(item => item._id === filteredCostCards[i]._id);
                    if (indexToRemove !== -1) {
                        filteredCostCards.splice(indexToRemove, 1);
                    };
                };
            };
            cardsToDisplay = cardsToDisplay.concat(filteredCostCards);
        };

        //FILTER THE CARDS BY TYPE AND CHECK IF THE CARDS ARE NOT ALREADY SELECTED TO BE DISPLAY
        for (const element of filter.type) {

            const filteredTypeCards = apiCards.filter((card) => {
                return card.type === element
            });

            const cardsAlreadyDisplayed = [];

            for (let i = filteredTypeCards.length - 1; i >= 0; i--) {

                cardsToDisplay.forEach(newCard => {
                    if (!cardsAlreadyDisplayed.includes(newCard._id)) {
                        cardsAlreadyDisplayed.push(newCard._id);
                    };
                });

                if (cardsAlreadyDisplayed.includes(filteredTypeCards[i]._id)) {
                    const indexToRemove = filteredTypeCards.findIndex(item => item._id === filteredTypeCards[i]._id);
                    if (indexToRemove !== -1) {
                        filteredTypeCards.splice(indexToRemove, 1);
                    }
                };
            };
            cardsToDisplay = cardsToDisplay.concat(filteredTypeCards);
        };

        //FILTER THE CARDS BY RARITY
        for (const element of filter.rarity) {

            const filteredRarityCards = apiCards.filter((card) => {
                return card.rarity === element;
            });


            const cardsAlreadyDisplayed = [];

            for (let i = filteredRarityCards.length - 1; i >= 0; i--) {

                cardsToDisplay.forEach(newCard => {
                    if (!cardsAlreadyDisplayed.includes(newCard._id)) {
                        cardsAlreadyDisplayed.push(newCard._id);
                    };
                });

                if (cardsAlreadyDisplayed.includes(filteredRarityCards[i]._id)) {
                    const indexToRemove = filteredRarityCards.findIndex(item => item._id === filteredRarityCards[i]._id);
                    if (indexToRemove !== -1) {
                        filteredRarityCards.splice(indexToRemove, 1);
                    };
                };
            };
            cardsToDisplay = cardsToDisplay.concat(filteredRarityCards);
        };

        cards = cardsToDisplay.map(data => {
            return <div
                key={data._id}
                name={data.name}
                regions={data.regions}
                cost={data.cost} type={data.type}
                keywords={data.keywords}
                rarity={data.rarity}
                onClick={() => addCard({
                    id: data._id,
                    name: data.name,
                    regions: data.regions,
                    cost: data.cost,
                    type: data.type,
                    keywords: data.keywords,
                    rarity: data.rarity,
                })}
            >
                <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} style={{ width: "auto", height: "auto" }} />
            </div>
        });
    };

    const handleOpen = () => {
        openMenu(true)
    };

    let divClass = 'pt-6 px-4 w-4/5 h-screen overflow-y-auto scrollbar-webkit';
    if (isMenu === false) {
        divClass = 'pt-6 px-4 h-screen min-w-full overflow-y-auto scrollbar-webkit';
    };

    let menuButtonClass = 'btn btn-circle bg-success hover:bg-info mr-8';
    if (isMenu === true) {
        menuButtonClass = 'hidden';
    };

    return (
        <div className={divClass}>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-5xl font-semibold'>{pageName}</h2>
                    <p className='text-lg ml-2'>found {cards.length} cards</p>
                </div>
                <button className={menuButtonClass} onClick={() => handleOpen()}>
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                </button>
            </div>
            <div className="flex flex-wrap justify-center mt-2">
                {cards}
            </div>
        </div>
    )

}

export default BuilderCardsDisplay;