import React, { useState } from "react";
import Card from "../components/card";
import securities from "../data.json";
import "../css/card.css";

const SearchPage = () => {
  return (
    <div className="cardGrid">
      {securities.map((security, idx) => (
        <Card key={idx} security={security} />
      ))}
    </div>
  );
};

export default SearchPage;
