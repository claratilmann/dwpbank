import React, { useState } from "react";
import "../css/card.css";
import Card from "../components/card";
import securities from "../data.json";

const SavedPage = () => {
  return (
    <div className="cardGrid">
      {securities.map((security, idx) => (
        <Card key={idx} security={security} />
      ))}
    </div>
  );
};

export default SavedPage;
