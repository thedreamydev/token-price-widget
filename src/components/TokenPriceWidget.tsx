import React, { useMemo } from "react";

import TokenInfo from "./TokenInfo";
import TokenSkeleton from "./TokenSkeleton";
import TokenError from "./TokenError";

import { cn } from "../utils/cn";
import { constructThemeVariables } from "../utils/constructThemeVariables";

import { useToken } from "../hooks/useToken";

interface TokenPriceWidgetProps {
  tokenAddress: string;
  chainId: number;
  refreshInterval?: number;
}

const TokenPriceWidget: React.FC<TokenPriceWidgetProps> = ({
  tokenAddress,
  chainId,
  refreshInterval = 60000, // default 60 seconds polling
}) => {
  const themeVariables = useMemo(() => constructThemeVariables(), []);

  const { token, loading, error } = useToken(
    chainId,
    tokenAddress,
    refreshInterval
  );

  return (
    <div
      style={themeVariables}
      role="region"
      aria-label="Token Price Widget"
      className={cn(
        "px-5 py-4 shadow-md min-w-56",
        "bg-[var(--background-color)] [font-family:var(--font-family)] text-[var(--text-color)]",
        "border border-[var(--border-color)] rounded-[var(--border-radius)]"
      )}
    >
      {loading && <TokenSkeleton />}

      {!loading && (error || !token) && (
        <TokenError message={error || "Failed to load token data."} />
      )}

      {!loading && token && <TokenInfo token={token} />}
    </div>
  );
};

export default TokenPriceWidget;
