import { useState, useEffect } from 'react';
import Image from "next/image";

const CardsDisplay = (props) => {
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
    return <div key={data._id} name={data.name} regions={data.regions} cost={data.cost} type={data.type} keywords={data.keywords} rarity={data.rarity}>
      <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} style={{ width: "auto", height: "auto" }} />
    </div>
  });

  const filter = props.selectedFilter;

  if (filter.region.length > 0 || filter.cost.length > 0) {
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
            cardsAlreadyDisplayed.push(newCard._id)
          }
        });

        if (cardsAlreadyDisplayed.includes(filteredCostCards[i]._id)) {
          const indexToRemove = filteredCostCards.findIndex(item => item._id === filteredCostCards[i]._id);
          if (indexToRemove !== -1) {
            filteredCostCards.splice(indexToRemove, 1);
          }
        };
      };
      cardsToDisplay = cardsToDisplay.concat(filteredCostCards)
    }

    cards = cardsToDisplay.map(data => {
      return <div key={data._id} name={data.name} regions={data.regions} cost={data.cost} type={data.type} keywords={data.keywords} rarity={data.rarity}>
        <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} style={{ width: "auto", height: "auto" }} />
      </div>
    });
  };

  const handleOpen = () => {
    props.openMenu(true)
  };

  let divClass = 'pt-6 px-4 basis-4/6 h-screen overflow-y-auto scrollbar-webkit';
  if (props.isMenu === false) {
    divClass = 'pt-6 px-4 h-screen min-w-full overflow-y-auto scrollbar-webkit';
  };

  let menuButtonClass = 'bg-success w-12 h-12 rounded-full flex justify-center pt-2 mr-24';
  if (props.isMenu === true) {
    menuButtonClass = 'hidden';
  };

  return (
    <div className={divClass}>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-5xl font-semibold'>{props.pageName}</h2>
          <p className='text-lg ml-2'>found {cards.length} cards</p>
        </div>
        <div className={menuButtonClass} onClick={() => handleOpen()}>
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-2">
        {cards}
      </div>
    </div>
  )


  // const fakedata = ["01DE012T1", "01DE017", "01DE022T1", "01DE048", "01FR024T1", "01FR024T3", "01FR028", "01IO009T2", "01IO023", "01IO028T2", "01IO057", "01NX002", "01NX008", "01NX024", "01NX049", "01PZ008T2", "01PZ056T9", "01SI030", "01SI044", "01SI047"]
  // const cards = fakedata.map(data => {
  //   const path = `/img/${data}.png`
  //   return <div key={data} >
  //     <Image className='mx-2' src={path} width={250} height={250} alt={":x"} />
  //   </div>

  // })
}

export default CardsDisplay;