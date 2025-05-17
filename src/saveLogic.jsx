import React, { createContext, useContext, useState, useEffect } from "react";

const SavedSecuritiesContext = createContext();

export const useSavedSecurities = () => useContext(SavedSecuritiesContext);

export const SavedSecuritiesProvider = ({ children }) => {
  const [saved, setSaved] = useState(() => {
    const stored = localStorage.getItem("savedSecurities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedSecurities", JSON.stringify(saved));
  }, [saved]);

  const toggleSave = (security) => {
    setSaved((prev) =>
      prev.some((s) => s.wkn === security.wkn)
        ? prev.filter((s) => s.wkn !== security.wkn)
        : [...prev, security]
    );
  };

  return (
    <SavedSecuritiesContext.Provider value={{ saved, toggleSave }}>
      {children}
    </SavedSecuritiesContext.Provider>
  );
};
