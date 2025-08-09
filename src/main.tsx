import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import TokenPriceWidget from "./components/TokenPriceWidget";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="flex items-center justify-center min-h-screen">
      <TokenPriceWidget
        chainId={1}
        tokenAddress="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
      />
    </div>
  </StrictMode>
);
