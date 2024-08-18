import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

export const ChartContext = createContext({});

export const useChartProvider = () => {
  return useContext(ChartContext);
};

export const ChartContextProvider = ({ children }) => {
  const [data, setData] = useState("");

  return (
    <ChartContext.Provider value={{ data, setData }}>
      {children}
    </ChartContext.Provider>
  );
};
