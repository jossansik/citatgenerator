import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import QuoteDisplay from "./components/QuoteDisplay";
import Title from "./components/Title";
import GenerateButton from "./components/GenerateButton";
import Quote from "./components/Quote";

const App = () => {
  const appStyles = {
    backgroundColor: "#f2f2f2",
    padding: "20px",
    fontFamily: "Courier, monospace",
    overflow: "hidden",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="container">
      {<Title />}
      {<QuoteDisplay />}
      {<GenerateButton />}
      {<Quote />}
      {<Footer />}
    </div>
  );
};

export default App;
