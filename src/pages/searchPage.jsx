import React, { useState } from "react";
import Card from "../components/card";
import securities from "../data.json";
import "../css/card.css";
import "../css/searchPage.css";
import {
  Radio,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

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
        <Typography variant="h2">Filter</Typography>
        <Typography variant="body1">
          Hier können Sie verschiedene Filteroptionen auswählen
        </Typography>
        <FormControl>
          <FormLabel id="typ-radio-buttons-group-label">Typ</FormLabel>
          <RadioGroup
            aria-labelledby="typ-radio-buttons-group-label"
            name="typ-radio-buttons-group"
            value={selectedTyp}
            onChange={(e) => setSelectedTyp(e.target.value)}
          >
            <FormControlLabel value="Aktie" control={<Radio />} label="Aktie" />
            <FormControlLabel
              value="Anleihe"
              control={<Radio />}
              label="Anleihe"
            />
            <FormControlLabel value="Fonds" control={<Radio />} label="Fonds" />
            <FormControlLabel value="ETF" control={<Radio />} label="ETF" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel id="risiko-radio-buttons-group-label">Typ</FormLabel>
          <RadioGroup
            aria-labelledby="risiko-radio-buttons-group-label"
            name="risiko-radio-buttons-group"
            value={selectedRisiko}
            onChange={(e) => setSelectedRisiko(e.target.value)}
          >
            <FormControlLabel value="Hoch" control={<Radio />} label="Hoch" />
            <FormControlLabel
              value="Mittel"
              control={<Radio />}
              label="Mittel"
            />
            <FormControlLabel
              value="Niedrig"
              control={<Radio />}
              label="Niedrig"
            />
          </RadioGroup>
        </FormControl>

        <Button
          variant="contained"
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
