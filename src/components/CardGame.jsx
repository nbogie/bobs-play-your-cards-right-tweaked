import { useState } from "react";
import cardDeckArray from "../data/carddeck";
import _ from "lodash";

/**
 * @typedef {import("../data/carddeck").Card} Card
 */

export function CardGame() {
  console.log("cardgame rendered");

  const [initialFirstCard, shuffledPack] = prepareCards();
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
    if (previousCards.length >= 5) {
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

  function restartGame() {
    const [newInitialFirstCard, newShuffledPack] = prepareCards();
    setCurrentCard(newInitialFirstCard);
    setCurrentPack([...newShuffledPack]);
    setPreviousCards([]);
    setPrediction(null);
  }

  return (
    <div>
      <button disabled={winState !== "progressing"} onClick={clickedHigher}>
        Higher!
      </button>
      <hr />
      Current card: {currentCard.id}
      <hr />
      {/* {currentPack.map((card) => card.id).join(", ")} */}
      <hr />
      Previous card(s): {previousCards.map((card) => card.id).join(", ")}
      <hr />
      <button disabled={winState !== "progressing"} onClick={clickedLower}>
        Lower!
      </button>
      <hr />
      {prediction !== null && <p>You predicted {prediction}</p>}
      {winState === "defeat" && (
        <div>
          {currentCard.value === previousCards[0].value && (
            <p>Nothing for a pair in this game!</p>
          )}
          <h1>GAME OVER YOU LOSE</h1>
          <hr />
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      {winState === "victory" && (
        <div>
          <h2>🥳🥳🥳YOU SOMEHOW WON!🥳🥳🥳</h2>
          <hr />
          <button onClick={restartGame}>Restart Game</button>
        </div>
      )}
      {winState === "progressing" && <div>Pick higher or lower!</div>}
      <hr />
      {winState === "progressing" && (
        <p>This is round {previousCards.length + 1} / 5</p>
      )}
    </div>
  );
}

/**
 *
 * @returns {Card, Card[]} the first card and the remaining shuffled cards
 */
function prepareCards() {
  let shuffledPack = _.sampleSize(createNewDeck(), 52);
  const initialFirstCard = shuffledPack.shift();
  if (initialFirstCard === undefined) {
    throw new Error("pack is empty!");
  }
  return [initialFirstCard, shuffledPack];
}


function createNewDeck() {
     return [...cardDeckArray]
}
