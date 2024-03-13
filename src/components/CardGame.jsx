// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { WinState } from "./WinState";
import { prepareCards } from "../gameCore/cardDeck";
import { CardView } from "./CardView";
import { PreviousCardsView } from "./PreviousCardsView";
import { RoundCounter } from "./RoundCounter";

/**
 * @typedef {import("../gameCore/cardDeck").Card} Card
 */

export function CardGame() {
  console.log("cardgame rendered");

  const [initialFirstCard, shuffledPack] = prepareCards();

  const [currentCard, setCurrentCard] = useState(initialFirstCard);
  const [currentPack, setCurrentPack] = useState([...shuffledPack]);
  /** @type {Card[]} */
  const initialCards = [];

  const [previousCards, setPreviousCards] = useState(initialCards);

  /**
   * @typedef {null | "higher" | "lower"} NullablePrediction
   */
  /**
   * @returns {NullablePrediction}
   */
  function initialPrediction() {
    return null;
  }
  const [prediction, setPrediction] = useState(initialPrediction());

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
   * @returns {WinState}
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
    <div className="game">
      <div className="gameRow">
        <PreviousCardsView previousCards={previousCards} />

        <div className="buttonsAndCurrentCard">
          <div className="predictionButtons">
            <button
              disabled={winState !== "progressing"}
              onClick={clickedHigher}
            >
              Higher!
            </button>
            <button
              disabled={winState !== "progressing"}
              onClick={clickedLower}
            >
              Lower!
            </button>
          </div>

          <div className="highlitCardHolder">
            <CardView card={currentCard} />
          </div>
        </div>
      </div>

      {prediction !== null && <p>You predicted {prediction}</p>}

      <WinState
        restartGame={restartGame}
        winState={winState}
        currentCard={currentCard}
        previousCards={previousCards}
      />

      {winState === "progressing" && (
        <RoundCounter currentRound={previousCards.length + 1} maxRounds={5} />
      )}
    </div>
  );
}
