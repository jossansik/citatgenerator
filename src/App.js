import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import QuoteDisplay from "./components/QuoteDisplay";
import Title from "./components/Title";

const App = () => {
  return (
    <>
      <div className="container">
        <QuoteDisplay />
      </div>
      <Footer />
    </>
  );
};

export default App;
