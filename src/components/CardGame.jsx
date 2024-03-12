import { useState } from "react";
import cardDeckArray from "../data/carddeck";
import _ from "lodash";

export function CardGame() {
  console.log("cardgame rendered");
  const shuffledPack = _.sampleSize(cardDeckArray, 52);
  const initialFirstCard = shuffledPack.shift();
  if (initialFirstCard === undefined) {
    throw new Error("pack is empty!");
  }
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
  function calculatePlayerLost() {
    if (prediction === "higher") {
      return currentCard.value <= previousCards[0].value;
    } else if (prediction === "lower") {
      return currentCard.value >= previousCards[0].value;
    } else {
      return false;
    }
  }

  function allRoundsCompleted() {
    if (previousCards.length >= 3) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * @returns {"victory" | "progressing" | "defeat"}
   */
  function calculateWinState() {
    if (calculatePlayerLost()) {
      return "defeat";
    } else if (allRoundsCompleted()) {
      return "victory";
    } else {
      return "progressing";
    }
  }

  const winState = calculateWinState();

  return (
    <div>
      <button disabled={winState !== "progressing"} onClick={clickedHigher}>
        Higher!
      </button>
      <hr />
      {currentCard.id}
      <hr />
      {/* {currentPack.map((card) => card.id).join(", ")} */}
      <hr />
      {previousCards.map((card) => card.id).join(", ")}
      <hr />
      <button disabled={winState !== "progressing"} onClick={clickedLower}>
        Lower!
      </button>
      <hr />

      {prediction !== null && <p>You predicted {prediction}</p>}

      {winState === "defeat" && (
        <div>
          <h1>GAME OVER YOU LOSE</h1>
          <button>Restart Game</button>
        </div>
      )}
      {winState === "victory" && (
        <div>
          <h2>🥳🥳🥳YOU SOMEHOW WON!🥳🥳🥳</h2>
        </div>
      )}
      {winState === "progressing" && <div>Pick higher or lower!</div>}
    </div>
  );
}
