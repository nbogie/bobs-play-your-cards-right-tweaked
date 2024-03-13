import React from "react";

export function RoundCounter(props) {
  return (
    <p>
      This is round {props.currentRound} / {props.maxRounds}
    </p>
  );
}
