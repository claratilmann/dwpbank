/*Hier wird die Detailseite für ein bestimmtes Wertpapier erzeugt.
Sie zeigt alle verfügbaren Informationen über das Wertpapier an. 
Es gibt auch ein Diagramm, das die Kursentwicklung des Wertpapiers zeigen sollte, es zeigt allerdings derzeit ein Platzhalterdiagramm, da diese Daten nicht verfügbar sind.
Außerdem gibt es Knöpfe, um zur vorherigen Seite zurückzukehren, das Wertpapier zu speichern und es für einen Vergleich zu markieren.
*/

import { useParams } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import securities from "../data.json";
import StarIcon from "@mui/icons-material/Star";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useSavedSecurities } from "../logic/saveLogic";
import { useMarkedSecurities } from "../logic/markLogic";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const exampleData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ],
  datasets: [
    {
      label: "Kursverlauf",
      data: [100, 110, 105, 120, 115, 130, 125, 140, 135, 150, 145, 160],
      fill: false,
      borderColor: "#343694",
      tension: 0.3,
    },
  ],
};

const exampleOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: { display: true },
    y: { display: true },
  },
};

const DetailPage = () => {
  const { wkn } = useParams();
  const security = securities.find((s) => s.wkn === wkn);
  const { saved, toggleSave } = useSavedSecurities();
  const isSaved = saved.some((s) => s.wkn === security.wkn);
  const { marked, toggleMark } = useMarkedSecurities();
  const isMarked = marked.some((s) => s.wkn === security.wkn);

  if (!security) {
    return <Typography variant="body1">Wertpapier nicht gefunden.</Typography>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <Button variant="contained" onClick={() => window.history.back()}>
        Zurück
      </Button>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <Typography variant="h1">{security.name}</Typography>

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
          <div>
            <Button
              onClick={() => toggleSave(security)}
              variant={isSaved ? "outlined" : "contained"}
              startIcon={<StarIcon sx={{ verticalAlign: "middle" }} />}
              style={{
                margin: "1rem",
              }}
            >
              {isSaved ? "Nicht speichern" : "Speichern"}
            </Button>
            <Button
              variant={isMarked ? "outlined" : "contained"}
              style={{ margin: "1rem" }}
              startIcon={<CompareArrowsIcon sx={{ verticalAlign: "middle" }} />}
              onClick={() => toggleMark(security)}
            >
              {isMarked ? "Nicht vergleichen" : "Vergleichen"}
            </Button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            minWidth: 400,
            maxWidth: 600,
            height: 350,
          }}
        >
          <Typography variant="h2">Kurs</Typography>
          <Line data={exampleData} options={exampleOptions} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
