import PropTypes from "prop-types";
import { useSavedSecurities } from "../saveLogic";
import { useMarkedSecurities } from "../markLogic";
import { Link } from "react-router-dom";
import { Card, Button, Typography, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../css/card.css";

const SecuritiesCard = ({ security }) => {
  const { saved, toggleSave } = useSavedSecurities();
  const isSaved = saved.some((s) => s.wkn === security.wkn);
  const { marked, toggleMark } = useMarkedSecurities();
  const isMarked = marked.some((s) => s.wkn === security.wkn);

  return (
    <Card style={{ position: "relative" }}>
      <IconButton
        onClick={() => toggleSave(security)}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          color: "#343694",
          zIndex: 1,
        }}
      >
        {isSaved ? <StarIcon /> : <StarBorderIcon />}
      </IconButton>
      <Typography variant="h2">{security.name}</Typography>
      <Typography variant="body1">Typ: {security.typ}</Typography>
      <Typography variant="body1">Risiko: {security.anlagerisiko}</Typography>
      <Link to={`/detail/${security.wkn}`}>
        <Button variant="contained">Mehr Erfahren</Button>
      </Link>
      <Button
        variant={isMarked ? "outlined" : "contained"}
        onClick={() => toggleMark(security)}
      >
        {isMarked ? "Nicht vergleichen" : "Vergleichen"}
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
