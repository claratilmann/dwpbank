import React from "react";
import { useMarkedSecurities } from "../markLogic";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Button,
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
  "Aktion",
];

const ComparisonPage = () => {
  const { marked, toggleMark } = useMarkedSecurities();
  return (
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
              {headers.slice(0, -1).map((key) => (
                <TableCell key={key}>{row[key.toLowerCase()]}</TableCell>
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
  );
};

export default ComparisonPage;
