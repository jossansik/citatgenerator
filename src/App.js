import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import QuoteDisplay from "./components/QuoteDisplay";
import Title from "./components/Title";
import Quote from "./components/Quote";

const App = () => {
  return (
    <>
      <div className="container">
        <Title />
        <QuoteDisplay />
        <Quote />
      </div>
      <Footer />
    </>
  );
};

export default App;
