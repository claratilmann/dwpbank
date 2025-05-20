# Wertpapier Vergleichs-App

Dies ist eine React-Anwendung, mit der Sie Wertpapiere suchen, filtern, vergleichen und speichern können. Die App wurde mit Vite (https://vitejs.dev/) erstellt und verwendet Material UI (https://mui.com/) für das Design.

## Voraussetzungen

- [Node.js](https://nodejs.org/) (empfohlen: Version 18 oder höher)
- [npm](https://www.npmjs.com/) (wird mit Node.js installiert)

## Installation

1. **Repository klonen**
```
   git clone github.com/claratilmann/dwpbank
   cd <Projektordner>
```
3. **Abhängigkeiten installieren**
```
   npm install
```
## Anwendung starten
```
    npm run dev
```
Die App ist dann unter http://localhost:5173 verfügbar.

## Erstellen des Projekts

Um das Projekt für die Produktion zu erstellen, verwenden Sie den folgenden Befehl:
```
npm run build
```
## Features

- **Suche & Filter:** Wertpapiere nach Typ und Risiko filtern
- **Detailansicht:** Alle Informationen zu einem Wertpapier inkl. Kursverlauf
- **Vergleich:** Markierte Wertpapiere in einer Tabelle vergleichen
- **Speichern:** Wertpapiere für später speichern

## Projektstruktur

- `src/components/` – Wiederverwendbare Komponenten (z.B. Card, Navbar)
- `src/css/` – CSS-Dateien für das Styling
- `src/logic/` - Logik für Speichern und Markieren von Wertpapieren
- `src/pages/` – Einzelne Seiten: Suche, Vergleich, Detail, Gespeichert
- `src/data.json` – Beispieldaten für Wertpapiere

## Hinweise

- Die Buttons "Beratung" und "Mein Konto" sind aktuell Platzhalter.
- Kursverläufe sind Beispielgrafiken und keine echten Daten.
