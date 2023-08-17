import { createContext, useState } from "react";

export const GlobalContext = createContext();

function ContextProvider({ children }) {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <GlobalContext.Provider value={{ navToggle, setNavToggle }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default ContextProvider;
