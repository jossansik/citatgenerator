import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="quote-display__title-container">
      <h1 className="quote-display__title">Välkommen till</h1>
      <h2 className="quote-display__title2">Citatgeneratorn</h2>
      <h3 className="quote-display__body">
        Här kan du hitta slumpmässigt valda citat för alla tillfällen och
        sinnesstämningar. Välj kategori, tryck på knappen och njut av nya
        insikter. <br />{" "}
      </h3>
    </div>
  );
};

export default Title;
