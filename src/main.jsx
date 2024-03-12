//This is the entry point which causes your App component to be rendered into a specific part of the DOM
//However, for your first few weeks you won't need to worry about this file.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
