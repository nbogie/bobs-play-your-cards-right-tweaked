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

  function clickedHigher() {
    console.log("Higher clicked");
    flipNewCard();
  }

  function clickedLower() {
    console.log("Lower clicked");
    flipNewCard();
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
    </div>
  );
}
