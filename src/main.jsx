import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { OverflowProvider } from "./context/OverflowContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OverflowProvider>
      <App />
    </OverflowProvider>
  </StrictMode>,
);
