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
  const [previousCards, setPreviousCards] = useState([]);
  const [prediction, setPrediction] = useState(null);

  function clickedHigher() {
    console.log("Higher clicked");
    flipNewCard();
    setPrediction("higher");
  }

  function clickedLower() {
    console.log("Lower clicked");
    flipNewCard();
    setPrediction("lower");
  }

  function flipNewCard() {
    const newPreviousCards = [currentCard, ...previousCards];
    setPreviousCards(newPreviousCards);
    const newCard = currentPack[0];
    const newPack = currentPack.slice(1);
    console.log({ newPack, currentPack });
    setCurrentCard(newCard);
    setCurrentPack(newPack);
  }
function calculateIsGameOver() {
  if (prediction === "higher") {
    return currentCard.value <= previousCards[0].value;
  } else if (prediction === "lower") {
    return currentCard.value >= previousCards[0].value;
  } else {
    return false;
  }
}

const isGameOver = calculateIsGameOver();
    

  return (
    <div>
      <button onClick={clickedHigher}>Higher!</button>
      <hr />
      {currentCard.id}
      <hr />
      {currentPack.map((card) => card.id).join(", ")}
      <hr />
      {previousCards.map((card) => card.id).join(", ")}
      <hr />
      <button onClick={clickedLower}>Lower!</button>
      <hr />
      You predicted {prediction}
      {isGameOver ? (
        <div>
          <h1>GAME OVER YOU LOSE</h1>
        </div>
      ) : (
        <div>Keep on going, see if you can win!</div>
      )}
    </div>
  );
}
