import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <h2>Pizza</h2>
    </>
  );
}

function Pizza() {
  const ingredients = ["cheese", "lol", "sauce", "pepperoni"];
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
