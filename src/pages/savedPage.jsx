/* Diese Komponente zeigt alle gespeicherten Wertpapiere in einem Raster unter Verwendung der Komponente Card an.
Sie verwendet useSavedSecurites, um die gespeicherten Wertpapiere abzurufen und Card für jedes Wertpapier zu erstellen.
 */

import React from "react";
import Card from "../components/card";
import { useSavedSecurities } from "../logic/saveLogic";
import "../css/card.css";
import { Typography } from "@mui/material";

const SavedPage = () => {
  const { saved } = useSavedSecurities();

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h1">Gespeicherte Wertpapiere </Typography>
      <Typography variant="body1" style={{ marginBottom: "1rem" }}>
        Hier können Sie die Wertpapiere sehen, die Sie gespeichert haben.
      </Typography>

      <div className="cardGrid">
        {saved.length === 0 ? (
          <Typography variant="body1">
            Keine gespeicherten Wertpapiere.
          </Typography>
        ) : (
          saved.map((security) => (
            <Card key={security.wkn} security={security} />
          ))
        )}
      </div>
    </div>
  );
};

export default SavedPage;
