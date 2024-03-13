import { useState } from "react";
import cardDeckArray from "../data/carddeck";
import _ from "lodash";
import { WinState } from "./WinState";
// eslint-disable-next-line no-unused-vars
import React from "react";

/**
 * @typedef {import("../data/carddeck").Card} Card
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
function RoundCounter(props) {
  return (
    <p>
      This is round {props.currentRound} / {props.maxRounds}
    </p>
  );
}

/**
 *
 * @returns {[Card, Card[]]} the first card and the remaining shuffled cards
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
  return [...cardDeckArray];
}

function CardView(props) {
  return <div className={"card"}>{props.card.id}</div>;
}

function PreviousCardsView(props) {
  return (
    <div className={"cardList"}>
      {[...props.previousCards].reverse().map((c) => (
        <CardView key={c.id} card={c} />
      ))}
    </div>
  );
}
