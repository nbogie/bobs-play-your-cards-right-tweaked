// eslint-disable-next-line no-unused-vars
import React from "react";

/**
 * @typedef {import("../gameCore/cardDeck").Card} Card
 */

/**
 *
 * @param {{ card:Card }} props
 */
export function CardView(props) {
  return <div className={"card"}>{props.card.id}</div>;
}
