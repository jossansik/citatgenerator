import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="title-container">
      <h1 className="title">Välkommen till</h1>
      <h2 className="title2">Citatgeneratorn</h2>
      <h3 className="body">
        Här kan du hitta slumpmässigt valda citat för alla tillfällen och
        sinnesstämningar. Välj kategori, tryck på knappen och låt dig
        inspireras! <br />{" "}
      </h3>
    </div>
  );
};

export default Title;
