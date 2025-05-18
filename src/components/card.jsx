import PropTypes from "prop-types";
import { useSavedSecurities } from "../saveLogic";
import { useMarkedSecurities } from "../markLogic";
import { Link } from "react-router-dom";
import { Card, Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import "../css/card.css";

const SecuritiesCard = ({ security }) => {
  const { saved, toggleSave } = useSavedSecurities();
  const isSaved = saved.some((s) => s.wkn === security.wkn);
  const { marked, toggleMark } = useMarkedSecurities();
  const isMarked = marked.some((s) => s.wkn === security.wkn);

  return (
    <Card style={{ position: "relative" }}>
      <Typography variant="h2">{security.name}</Typography>
      <Typography variant="body1">Typ: {security.typ}</Typography>
      <Typography variant="body1">Risiko: {security.anlagerisiko}</Typography>

      <div>
        <Button
          onClick={() => toggleSave(security)}
          variant={isSaved ? "outlined" : "contained"}
          startIcon={<StarIcon sx={{ verticalAlign: "middle" }} />}
          style={{
            zIndex: 1,
          }}
        >
          {isSaved ? "Nicht speichern" : "Speichern"}
        </Button>
        <Button
          variant={isMarked ? "outlined" : "contained"}
          startIcon={<CompareArrowsIcon sx={{ verticalAlign: "middle" }} />}
          onClick={() => toggleMark(security)}
        >
          {isMarked ? "Nicht vergleichen" : "Vergleichen"}
        </Button>
      </div>
      <Button>
        <Link to={`/detail/${security.wkn}`}>Mehr Erfahren</Link>
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
