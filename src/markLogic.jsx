import React, { createContext, useContext, useState, useEffect } from "react";

const MarkedSecuritiesContext = createContext();

export const useMarkedSecurities = () => useContext(MarkedSecuritiesContext);

export const MarkedSecuritiesProvider = ({ children }) => {
  const [marked, setMarked] = useState(() => {
    const stored = localStorage.getItem("markedSecurities");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("markedSecurities", JSON.stringify(marked));
  }, [marked]);

  const toggleMark = (security) => {
    setMarked((prev) =>
      prev.some((s) => s.wkn === security.wkn)
        ? prev.filter((s) => s.wkn !== security.wkn)
        : [...prev, security]
    );
  };

  return (
    <MarkedSecuritiesContext.Provider value={{ marked, toggleMark }}>
      {children}
    </MarkedSecuritiesContext.Provider>
  );
};
