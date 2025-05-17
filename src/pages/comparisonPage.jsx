import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  Button,
} from "@carbon/react";
import securities from "../data.json";

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

const ComparisonPage = () => (
  <div>
    <Table size="lg" useZebraStyles={false}>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableHeader id={header.key} key={header}>
              {header}
            </TableHeader>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {securities.map((row) => (
          <TableRow key={row.wkn}>
            {Object.keys(row)
              .filter((key) => key !== "id")
              .map((key) => {
                return <TableCell key={key}>{row[key]}</TableCell>;
              })}
            <TableCell>
              <Button>Entfernen</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default ComparisonPage;
