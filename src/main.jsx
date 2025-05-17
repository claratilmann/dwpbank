import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App.jsx";
import "@carbon/styles/css/styles.css";
import { SavedSecuritiesProvider } from "./saveLogic";
import { MarkedSecuritiesProvider } from "./markLogic";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StrictMode>
      <MarkedSecuritiesProvider>
        <SavedSecuritiesProvider>
          <App />
        </SavedSecuritiesProvider>
      </MarkedSecuritiesProvider>
    </StrictMode>
  </StrictMode>
);
