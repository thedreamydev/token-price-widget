import React from "react";
import type { Token } from "../types";

import PriceChange from "./PriceChange";

import { formatUsdPrice } from "../utils/formatUsdPrice";

type TokenInfoProps = {
  token: Token;
};

const TokenInfo: React.FC<TokenInfoProps> = ({ token }) => {
  return (
    <>
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
        {token.priceUsd ? formatUsdPrice(token.priceUsd) : "$0.00"}
      </h1>
    </>
  );
};

export default TokenInfo;
