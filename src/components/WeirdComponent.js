//Ignore this file, initially.  Or delete it.

//This should how we could work in React without JSX.
//NO-ONE DOES THIS!

import { createElement } from "react";

const moreElements = [10, 20, 30, 40].map((n) =>
    createElement("div", { num: n }, "I am div: " + n)
);

const weirdElement = createElement(
    "div", //element type
    { className: "weird" }, //props
    createElement("h2", {}, "Hello i am made without JSX"), //child one
    moreElements //child 2 - (happens to be an array of elements)
);

export { weirdElement };
