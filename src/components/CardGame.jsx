import { useState } from "react";
import cardDeckArray from "../data/carddeck";
import _ from "lodash";

export function CardGame() {
  console.log("cardgame rendered");
  const shuffledPack = _.sampleSize(cardDeckArray, 52);
  const initialFirstCard = shuffledPack.shift();
  const [currentCard, setCurrentCard] = useState(initialFirstCard);
  console.log({ currentCard });
  const [currentPack, setCurrentPack] = useState([...shuffledPack]);
  console.log({ currentPack });

  function clickedHigher() {
    console.log("Higher clicked");
    const newCard = currentPack[0];
    const newPack = currentPack.slice(1);
    console.log({ newPack, currentPack });
    setCurrentCard(newCard);
    setCurrentPack(newPack);
  }

  function clickedLower() {
    console.log("Lower clicked");
  }

  return (
    <div>
      <button onClick={clickedHigher}>Higher!</button>
      <hr />
      {currentCard.id}
      <br />
      {currentPack[0].id}
      {currentPack[1].id}
      {currentPack[2].id}
      {currentPack[3].id}
      {currentPack[4].id}
      <br></br>
      <button onClick={clickedLower}>Lower!</button>
    </div>
  );
}
