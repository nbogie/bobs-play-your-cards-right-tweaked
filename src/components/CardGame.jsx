import { useState } from "react";
import cardDeckArray from "../data/carddeck";
import _ from "lodash";

export function CardGame() {
  console.log("cardgame rendered");
  const shuffledPack = _.sampleSize(cardDeckArray, 52);
  const [currentPack, setCurrentPack] = useState(shuffledPack);
  console.log({ currentPack });

  function clickedHigher() {
    console.log("Higher clicked");
    //q: how to remove the first card from the pack?
    //a: use the slice method
    const newPack = currentPack.slice(1);
    console.log({ newPack, currentPack });
    setCurrentPack(newPack);
  }

  function clickedLower() {
    console.log("Lower clicked");
  }

  return (
    <div>
      <button onClick={clickedHigher}>Higher!</button>
      <br></br>
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
