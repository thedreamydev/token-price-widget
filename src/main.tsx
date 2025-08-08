import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="text-red-500">Hello, World!</h1>
  </StrictMode>
);
