import { useParams } from "react-router-dom";
import { Button, Typography, IconButton } from "@mui/material";
import securities from "../data.json";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useSavedSecurities } from "../saveLogic";
import { useMarkedSecurities } from "../markLogic";
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
  labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul"],
  datasets: [
    {
      label: "Kursverlauf",
      data: [100, 110, 105, 120, 115, 130, 125],
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
        Zurück zur Suche
      </Button>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <Typography
              variant="h1"
              style={{ fontSize: "2rem", marginBottom: "1rem" }}
            >
              {security.name}
            </Typography>
            <IconButton
              onClick={() => toggleSave(security)}
              style={{
                color: "#343694",
                zIndex: 1,
                marginBottom: "1rem",
              }}
            >
              {isSaved ? <StarIcon /> : <StarBorderIcon />}
            </IconButton>
          </div>

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
          <Button
            variant={isMarked ? "outlined" : "contained"}
            style={{ marginTop: "1rem" }}
            onClick={() => toggleMark(security)}
          >
            {isMarked ? "Nicht vergleichen" : "Vergleichen"}
          </Button>
        </div>

        <div
          style={{
            width: "100%",
            minWidth: 400,
            maxWidth: 600,
            height: 350,
          }}
        >
          <Line data={exampleData} options={exampleOptions} />
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
