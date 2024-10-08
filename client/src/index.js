import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { ChartContextProvider } from "./context/chartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChartContextProvider>
        <App />
      </ChartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
