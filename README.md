- English Version below \*

# Wertpapier Vergleichs-App

Dies ist eine React-Anwendung, mit der Sie Wertpapiere suchen, filtern, vergleichen und speichern können. Die App wurde mit Vite (https://vitejs.dev/) erstellt und verwendet Material UI (https://mui.com/) für das Design.

## Voraussetzungen

- [Node.js](https://nodejs.org/) (empfohlen: Version 18 oder höher)
- [npm](https://www.npmjs.com/) (wird mit Node.js installiert)

## Installation

1. **Repository klonen**  
   git clone <REPO-URL>
   cd <Projektordner>

2. **Abhängigkeiten installieren**  
   npm install

## Anwendung starten

    npm run dev

Die App ist dann unter http://localhost:5173 verfügbar.

## Features

- **Suche & Filter:** Wertpapiere nach Typ und Risiko filtern
- **Detailansicht:** Alle Informationen zu einem Wertpapier inkl. Kursverlauf
- **Vergleich:** Markierte Wertpapiere in einer Tabelle vergleichen
- **Speichern:** Wertpapiere für später speichern

## Projektstruktur

- `src/components/` – Wiederverwendbare Komponenten (z.B. Card, Navbar)
- `src/css/` – CSS-Dateien für das Styling
- `src/logic/` - Logik für speichern und markieren von Wertpapieren
- `src/pages/` – Seiten wie Suche, Vergleich, Detail, Gespeichert
- `src/data.json` – Beispieldaten für Wertpapiere

## Hinweise

- Die Buttons "Beratung" und "Mein Konto" sind aktuell Platzhalter.
- Kursverläufe sind Beispielgrafiken und keine echten Daten.

# Securities Comparison App

This is a React application that allows you to search, filter, compare, and save securities. The app is built with [Vite](https://vitejs.dev/) and uses [Material UI](https://mui.com/) for styling.

## Prerequisites

- [Node.js](https://nodejs.org/) (recommended: version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. **Clone the repository**
   git clone <REPO-URL>
   cd <project-folder>

2. **Install dependencies**
   npm install

## Start the application

npm run dev

The app will then be available at [http://localhost:5173].

## Features

- **Search & Filter:** Filter securities by type and risk
- **Detail View:** View all information about a security, including price chart
- **Comparison:** Compare marked securities in a table
- **Save:** Save securities for later

## Project Structure

- `src/components/` – Reusable components (e.g., Card, Navbar)
- `src/css/` – CSS files for styling
- `src/logic/` – Logic for marking and saving securities
- `src/pages/` – Pages like Search, Comparison, Detail, Saved
- `src/data.json` – Example data for securities

## Notes

- The "Consultation" and "My Account" buttons are currently placeholders.
- Price charts are example graphics and not real data.
