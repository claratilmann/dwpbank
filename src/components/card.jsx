import PropTypes from "prop-types";
import { useSavedSecurities } from "../saveLogic";
import "../css/card.css";

const Card = ({ security }) => {
  const { saved, toggleSave } = useSavedSecurities();
  const isSaved = saved.some((s) => s.wkn === security.wkn);

  return (
    <div className="securitiesCard">
      <h1>{security.name}</h1>
      <p>Typ: {security.typ}</p>
      <p>Risiko: {security.anlagerisiko}</p>
      <button className="cardButton">Mehr Erfahren</button>
      <button
        className="cardButton"
        onClick={() => toggleSave(security)}
        style={{ backgroundColor: isSaved ? "#e74c3c" : "#343694" }}
      >
        {isSaved ? "Entfernen" : "Speichern"}
      </button>
    </div>
  );
};

Card.propTypes = {
  security: PropTypes.shape({
    wkn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    typ: PropTypes.string,
    anlagerisiko: PropTypes.string,
  }).isRequired,
};

export default Card;
