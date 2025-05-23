import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SavedSecuritiesProvider } from "./logic/saveLogic";
import { MarkedSecuritiesProvider } from "./logic/markLogic";

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
