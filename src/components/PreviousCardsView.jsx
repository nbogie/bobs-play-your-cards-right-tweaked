import React from "react";
import { CardView } from "./CardView";

export function PreviousCardsView(props) {
  return (
    <div className={"cardList"}>
      {[...props.previousCards].reverse().map((c) => (
        <CardView key={c.id} card={c} />
      ))}
    </div>
  );
}
