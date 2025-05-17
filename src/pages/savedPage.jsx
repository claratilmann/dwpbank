import React from "react";
import Card from "../components/card";
import { useSavedSecurities } from "../saveLogic";
import "../css/card.css";

const SavedPage = () => {
  const { saved } = useSavedSecurities();

  return (
    <div className="cardGrid">
      {saved.length === 0 ? (
        <p>Keine gespeicherten Wertpapiere.</p>
      ) : (
        saved.map((security) => <Card key={security.wkn} security={security} />)
      )}
    </div>
  );
};

export default SavedPage;
