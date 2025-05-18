import PropTypes from "prop-types";
import { useSavedSecurities } from "../saveLogic";
import { useMarkedSecurities } from "../markLogic";
import { Link } from "react-router-dom";
import { Card, Button } from "@mui/material";
import "../css/card.css";

const SecuritiesCard = ({ security }) => {
  const { saved, toggleSave } = useSavedSecurities();
  const isSaved = saved.some((s) => s.wkn === security.wkn);
  const { marked, toggleMark } = useMarkedSecurities();
  const isMarked = marked.some((s) => s.wkn === security.wkn);

  return (
    <Card>
      <h1>{security.name}</h1>
      <p>Typ: {security.typ}</p>
      <p>Risiko: {security.anlagerisiko}</p>
      <Link to={`/detail/${security.wkn}`}>
        <Button>Mehr Erfahren</Button>
      </Link>
      <Button
        onClick={() => toggleSave(security)}
        style={{
          backgroundColor: isSaved ? "#e74c3c" : "#343694",
          margin: "1rem",
        }}
      >
        {isSaved ? "Entfernen" : "Speichern"}
      </Button>
      <Button
        style={{ backgroundColor: isMarked ? "#ffb300" : "#888" }}
        onClick={() => toggleMark(security)}
      >
        {isMarked ? "Vom Vergleich entfernen" : "Vergleichen"}
      </Button>
    </Card>
  );
};

SecuritiesCard.propTypes = {
  security: PropTypes.shape({
    wkn: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    typ: PropTypes.string,
    anlagerisiko: PropTypes.string,
  }).isRequired,
};

export default SecuritiesCard;
