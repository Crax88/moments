import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./components/ThemeProvider";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
