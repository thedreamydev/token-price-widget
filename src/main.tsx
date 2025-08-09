import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TokenPriceWidget from "./components/TokenPriceWidget";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  // 📝 NOTE: In React 18 development mode, <StrictMode> intentionally mounts,
  // unmounts, and re-mounts components once to detect unsafe side effects.
  // This will cause useEffect to run twice (and abort then re-run fetch requests).
  // This behavior happens ONLY in development — production runs effects once.
  <StrictMode>
    <div className="flex items-center justify-center min-h-screen">
      <TokenPriceWidget
        chainId={1}
        tokenAddress="0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
      />
    </div>
  </StrictMode>
);
