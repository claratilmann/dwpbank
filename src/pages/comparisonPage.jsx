/* Hier wird die Vergleichsseite erzeugt, auf der der Benutzer alle verfügbaren Informationen zu den Wertpapieren, die er zum Vergleich markiert hat, in einer Tabelle sehen kann.
Es gibt außerdem Knöpfe zum Entfernen eines Wertpapiers aus der Vergleichsliste.
Mithilfe von useMarkedSecurities werden die markierten Wertpapiere abgerufen und zugeordnet, um für jedes Wertpapier eine Tabellenzeile zu erstellen.
*/

import React from "react";
import { useMarkedSecurities } from "../logic/markLogic";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Button,
  Typography,
} from "@mui/material";

const headers = [
  "wkn",
  "isin",
  "Name",
  "Typ",
  "Kurs",
  "Anlagerisiko",
  "Hauptversammlung",
  "Emittent",
  "Entfernen",
];

const headerKeyMap = {
  wkn: "wkn",
  isin: "isin",
  Name: "name",
  Typ: "typ",
  Kurs: "kurs",
  Anlagerisiko: "anlagerisiko",
  Hauptversammlung: "datum_naechste_hauptversammlung",
  Emittent: "emittent",
};

const ComparisonPage = () => {
  const { marked, toggleMark } = useMarkedSecurities();
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h1">Vergleich </Typography>
      <Typography variant="body1" style={{ marginBottom: "1rem" }}>
        Hier können Sie die Wertpapiere sehen, die Sie zum Vergleich markiert
        haben. Mit einem Klick auf "entfernen" können Sie ien Wertpapier aus der
        Tabelle entfernen.
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {marked.map((row) => (
              <TableRow key={row.wkn}>
                {headers.slice(0, -1).map((header) => (
                  <TableCell key={header}>
                    {row[headerKeyMap[header]]}
                  </TableCell>
                ))}
                <TableCell>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => toggleMark(row)}
                  >
                    Entfernen
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ComparisonPage;
