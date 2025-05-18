import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import securities from "../data.json";

const DetailPage = () => {
  const { wkn } = useParams();
  const security = securities.find((s) => s.wkn === wkn);

  if (!security) {
    return <p>Wertpapier nicht gefunden.</p>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Button variant="contained" onClick={() => window.history.back()}>
        Zurück zur Suche
      </Button>
      <Typography variant="h1" style={{ fontSize: "2rem" }}>
        {security.name}
      </Typography>
      <Typography variant="body1">
        <strong>WKN:</strong> {security.wkn}
      </Typography>
      <Typography variant="body1">
        <strong>ISIN:</strong> {security.isin}
      </Typography>
      <Typography variant="body1">
        <strong>Typ:</strong> {security.typ}
      </Typography>
      <Typography variant="body1">
        <strong>Kurs:</strong> {security.kurs}
      </Typography>
      <Typography variant="body1">
        <strong>Anlagerisiko:</strong> {security.anlagerisiko}
      </Typography>
      <Typography variant="body1">
        <strong>Hauptversammlung:</strong>{" "}
        {security.datum_naechste_hauptversammlung}
      </Typography>
      <Typography variant="body1">
        <strong>Emittent:</strong> {security.emittent}
      </Typography>
    </div>
  );
};

export default DetailPage;
