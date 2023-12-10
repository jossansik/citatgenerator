import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import QuoteDisplay from "./components/QuoteDisplay";

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
      {<QuoteDisplay />}
      {<Footer />}
    </div>
  );
};

export default App;
