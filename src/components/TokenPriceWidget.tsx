import React, { useMemo } from "react";

import type { TokenInfo } from "../types";

import PriceChange from "./PriceChange";

import { cn } from "../utils/cn";
import { formatUsdPrice } from "../utils/formatUsdPrice";
import { constructThemeVariables } from "../utils/constructThemeVariables";

interface TokenPriceWidgetProps {
  tokenAddress: string;
  chainId: number;
}

const TokenPriceWidget: React.FC<TokenPriceWidgetProps> = ({
  tokenAddress,
  chainId,
}) => {
  const themeVariables = useMemo(() => constructThemeVariables(), []);

  const token: TokenInfo = {
    name: "Aave",
    symbol: "aave",
    image:
      "https://coin-images.coingecko.com/coins/images/12645/small/aave-token-round.png?1720472354",
    priceUsd: 3200.55,
    change24h: 1.25,
  };

  return (
    <div
      style={themeVariables}
      role="region"
      aria-label={`Token price information for ${token.name} (${token.symbol}) on chain ${chainId}`}
      className={cn(
        "px-5 py-4 shadow-md min-w-56",
        "bg-[var(--background-color)] [font-family:var(--font-family)] text-[var(--text-color)]",
        "border border-[var(--border-color)] rounded-[var(--border-radius)]"
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {token.image && (
            <img
              src={token.image || ""}
              alt={`${token.name} logo`}
              className="size-6 shrink-0"
            />
          )}

          <div>
            <p
              aria-label="Token Symbol"
              className="uppercase text-base font-semibold"
            >
              {token.symbol}
            </p>
          </div>
        </div>
        <PriceChange change24h={token.change24h} />
      </div>

      <h1
        aria-label="Token Price"
        className="text-2xl font-bold tracking-tight"
      >
        {token.priceUsd ? formatUsdPrice(token.priceUsd) : "N/A"}
      </h1>
    </div>
  );
};

export default TokenPriceWidget;
