// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";

/**
 * @typedef {import("../gameCore/cardDeck").Card} Card
 */

/**
 *
 * @param {{ card:Card }} props
 */
export function CardView(props) {
  return (
    <motion.div
      layout
      layoutId={props.card.id}
      transition={{ type: "spring", damping: 20 }}
      key={props.card.id}
      className={"card"}
    >
      {props.card.id}
    </motion.div>
  );
}
