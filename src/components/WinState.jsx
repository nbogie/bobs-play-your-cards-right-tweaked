// eslint-disable-next-line no-unused-vars
import React from "react";
/**
 * @typedef {"victory" | "progressing" | "defeat"} WinState
 */

/**
 * @typedef {import("../gameCore/cardDeck").Card} Card
 */

/**
 *
 * @param {{
 * winState: WinState,
 * currentCard:Card,
 * previousCards:Card[]
 * restartGame: () => void }} props
 * @returns
 */
export function WinState(props) {
  const { winState, currentCard, previousCards, restartGame } = props;
  return (
    <>
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
    </>
  );
}
