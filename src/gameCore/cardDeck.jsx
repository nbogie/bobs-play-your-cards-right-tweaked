import { sampleSize } from "lodash";

/**
 *
 * @returns {[Card, Card[]]} the first card and the remaining shuffled cards
 */
export function prepareCards() {
  let shuffledPack = sampleSize(createNewDeck(), 52);
  const initialFirstCard = shuffledPack.shift();
  if (initialFirstCard === undefined) {
    throw new Error("pack is empty!");
  }
  return [initialFirstCard, shuffledPack];
}

function createNewDeck() {
  return [...cardDeckArray];
}

/**
 * Represents a card in the deck.
 * @typedef {Object} Card
 * @property {string} id - The unique identifier of the card.
 * @property {number} value - The numerical value of the card.
 * @property {"diamonds" | "hearts" | "clubs" | "spades"} suit - The suit of the card.
 */

/**
 * An array of cards representing a standard deck of playing cards.
 * @type {Card[]}
 */
const cardDeckArray = [
  { id: "2♦️", value: 2, suit: "diamonds" },
  { id: "3♦️", value: 3, suit: "diamonds" },
  { id: "4♦️", value: 4, suit: "diamonds" },
  { id: "5♦️", value: 5, suit: "diamonds" },
  { id: "6♦️", value: 6, suit: "diamonds" },
  { id: "7♦️", value: 7, suit: "diamonds" },
  { id: "8♦️", value: 8, suit: "diamonds" },
  { id: "9♦️", value: 9, suit: "diamonds" },
  { id: "10♦️", value: 10, suit: "diamonds" },
  { id: "J♦️", value: 11, suit: "diamonds" },
  { id: "Q♦️", value: 12, suit: "diamonds" },
  { id: "K♦️", value: 13, suit: "diamonds" },
  { id: "A♦️", value: 14, suit: "diamonds" },
  { id: "2♥️", value: 2, suit: "hearts" },
  { id: "3♥️", value: 3, suit: "hearts" },
  { id: "4♥️", value: 4, suit: "hearts" },
  { id: "5♥️", value: 5, suit: "hearts" },
  { id: "6♥️", value: 6, suit: "hearts" },
  { id: "7♥️", value: 7, suit: "hearts" },
  { id: "8♥️", value: 8, suit: "hearts" },
  { id: "9♥️", value: 9, suit: "hearts" },
  { id: "10♥️", value: 10, suit: "hearts" },
  { id: "J♥️", value: 11, suit: "hearts" },
  { id: "Q♥️", value: 12, suit: "hearts" },
  { id: "K♥️", value: 13, suit: "hearts" },
  { id: "A♥️", value: 14, suit: "hearts" },
  { id: "2♣️", value: 2, suit: "clubs" },
  { id: "3♣️", value: 3, suit: "clubs" },
  { id: "4♣️", value: 4, suit: "clubs" },
  { id: "5♣️", value: 5, suit: "clubs" },
  { id: "6♣️", value: 6, suit: "clubs" },
  { id: "7♣️", value: 7, suit: "clubs" },
  { id: "8♣️", value: 8, suit: "clubs" },
  { id: "9♣️", value: 9, suit: "clubs" },
  { id: "10♣️", value: 10, suit: "clubs" },
  { id: "J♣️", value: 11, suit: "clubs" },
  { id: "Q♣️", value: 12, suit: "clubs" },
  { id: "K♣️", value: 13, suit: "clubs" },
  { id: "A♣️", value: 14, suit: "clubs" },
  { id: "2♠️", value: 2, suit: "spades" },
  { id: "3♠️", value: 3, suit: "spades" },
  { id: "4♠️", value: 4, suit: "spades" },
  { id: "5♠️", value: 5, suit: "spades" },
  { id: "6♠️", value: 6, suit: "spades" },
  { id: "7♠️", value: 7, suit: "spades" },
  { id: "8♠️", value: 8, suit: "spades" },
  { id: "9♠️", value: 9, suit: "spades" },
  { id: "10♠️", value: 10, suit: "spades" },
  { id: "J♠️", value: 11, suit: "spades" },
  { id: "Q♠️", value: 12, suit: "spades" },
  { id: "K♠️", value: 13, suit: "spades" },
  { id: "A♠️", value: 14, suit: "spades" },
];

export default cardDeckArray;
