import { useParams } from "react-router-dom";
import Button from "@carbon/react/es/components/Button";
import securities from "../data.json";

const DetailPage = () => {
  const { wkn } = useParams();
  const security = securities.find((s) => s.wkn === wkn);

  if (!security) {
    return <p>Wertpapier nicht gefunden.</p>;
  }

  return (
    <div>
      <Button onClick={() => window.history.back()}>Zurück zur Suche</Button>
      <h1>{security.name}</h1>
      <p>
        <strong>WKN:</strong> {security.wkn}
      </p>
      <p>
        <strong>ISIN:</strong> {security.isin}
      </p>
      <p>
        <strong>Typ:</strong> {security.typ}
      </p>
      <p>
        <strong>Kurs:</strong> {security.kurs}
      </p>
      <p>
        <strong>Anlagerisiko:</strong> {security.anlagerisiko}
      </p>
      <p>
        <strong>Hauptversammlung:</strong> {security.hauptversammlung}
      </p>
      <p>
        <strong>Emittent:</strong> {security.emittent}
      </p>
    </div>
  );
};

export default DetailPage;
