import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";

import ComparisonPage from "./pages/comparisonPage";
import DetailsPage from "./pages/detailPage";
import SavedPage from "./pages/savedPage";
import SearchPage from "./pages/searchPage";
import NavigationBar from "./components/navbar";

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/saved" element={<SavedPage />} />
        <Route path="/detail/:wkn" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
