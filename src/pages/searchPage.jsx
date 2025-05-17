import React, { useState } from "react";
import Card from "../components/card";
import securities from "../data.json";
import "../css/card.css";
import "../css/searchPage.css";
import { RadioButton, RadioButtonGroup, Button } from "@carbon/react";

const typOptions = [
  { label: "Aktie", value: "Aktie" },
  { label: "Anleihe", value: "Anleihe" },
  { label: "Fonds", value: "Fonds" },
  { label: "ETF", value: "ETF" },
];

const risikoOptions = [
  { label: "Hoch", value: "Hoch" },
  { label: "Mittel", value: "Mittel" },
  { label: "Niedrig", value: "Niedrig" },
];

const SearchPage = () => {
  const [selectedTyp, setSelectedTyp] = useState("");
  const [selectedRisiko, setSelectedRisiko] = useState("");

  const filteredSecurities = securities.filter((security) => {
    const typMatch = selectedTyp ? security.typ === selectedTyp : true;
    const risikoMatch = selectedRisiko
      ? security.anlagerisiko === selectedRisiko
      : true;
    return typMatch && risikoMatch;
  });

  const handleReset = () => {
    setSelectedTyp("");
    setSelectedRisiko("");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="filterSection">
        <h2>Filter</h2>
        <p>Hier können Sie verschiedene Filteroptionen auswählen</p>
        <RadioButtonGroup
          legendText="Typ"
          name="radio-button-group-typ"
          orientation="vertical"
          valueSelected={selectedTyp}
          onChange={setSelectedTyp}
        >
          {typOptions.map((option) => (
            <RadioButton
              key={option.value}
              labelText={option.label}
              value={option.value}
              id={`typ-${option.value}`}
            />
          ))}
        </RadioButtonGroup>
        <RadioButtonGroup
          legendText="Risiko"
          name="radio-button-group-Risiko"
          orientation="vertical"
          valueSelected={selectedRisiko}
          onChange={setSelectedRisiko}
        >
          {risikoOptions.map((option) => (
            <RadioButton
              key={option.value}
              labelText={option.label}
              value={option.value}
              id={`risiko-${option.value}`}
            />
          ))}
        </RadioButtonGroup>
        <Button
          kind="secondary"
          onClick={handleReset}
          style={{ marginTop: "1rem" }}
        >
          Filter zurücksetzen
        </Button>
      </div>
      <div className="cardGrid" style={{ flex: 1 }}>
        {filteredSecurities.map((security, idx) => (
          <Card key={idx} security={security} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
