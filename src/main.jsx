
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Importing App component

// Creating a root element for React to render into
const rootElement = document.getElementById("root");

// Creating a root React DOM client
const rootReactDOMClient = ReactDOM.createRoot(rootElement);

// Rendering the App component into the root element
rootReactDOMClient.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
