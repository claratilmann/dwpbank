import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import "@carbon/styles/css/styles.css";
import { SavedSecuritiesProvider } from "./saveLogic";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SavedSecuritiesProvider>
      <App />
    </SavedSecuritiesProvider>
  </StrictMode>
);
