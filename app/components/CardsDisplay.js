import { useState, useEffect } from 'react';
import Image from "next/image";

const CardsDisplay = (props) => {
  const [apiCards, setApiCards] = useState([]);
  const [shownCards, setShownCards] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then((data) => {
        setShownCards(data.result);
        setApiCards(data.result);
      });

  }, []);

  let cards = shownCards.map(data => {
    return <div key={data._id}>
      <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} style={{ width: "auto", height: "auto" }} />
    </div>
  });


  if (props.selectedFilter.length > 0) {
    let newCards = [];

    for (const element of props.selectedFilter) {

      const filteredCards = apiCards.filter((card) => { return card.regions.includes(element) === true });
      newCards = newCards.concat(filteredCards)
    }

    cards = newCards.map(data => {
      return <div key={data._id}>
        <Image src={data.assets[0].gameAbsolutePath} width={250} height={250} alt={data.name} style={{ width: "auto", height: "auto" }} />
      </div>
    });
  };

  console.log("CARDS", cards);
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