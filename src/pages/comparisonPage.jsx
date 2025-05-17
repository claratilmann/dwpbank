import React from "react";
import { useMarkedSecurities } from "../markLogic";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  Button,
} from "@carbon/react";

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
          {marked.map((row) => (
            <TableRow key={row.wkn}>
              {Object.keys(row)
                .filter((key) => key !== "id")
                .map((key) => {
                  return <TableCell key={key}>{row[key]}</TableCell>;
                })}
              <TableCell>
                <Button onClick={() => toggleMark(row)}>Entfernen</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonPage;
