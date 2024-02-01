'use client'
import React from 'react'
import Header from "../components/Header";
import { useState, useEffect } from 'react';

const CardsPage = () => {
  const [apiCards, setApiCards] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3000/cards')
      .then(response => response.json())
      .then((data) => {
        setApiCards(data.result);
        // console.log(data.result)
      });
  }, []);

  const cards = apiCards.map( data => {
      return <img src={data.assets[0].gameAbsolutePath} alt={":x"} />
  })

  return (
    <div>
      <Header />
      <div>
      {cards}
      </div>
      CardsPage
    </div>
  )
}

export default CardsPage