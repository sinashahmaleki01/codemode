//--------------------|📝 : Imports

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//--------------------|📝 : Create root

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
