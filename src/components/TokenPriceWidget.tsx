import React, { useMemo } from "react";

import TokenInfo from "./TokenInfo";
import TokenSkeleton from "./TokenSkeleton";
import TokenError from "./TokenError";

import { cn } from "../utils/cn";
import { constructThemeVariables } from "../utils/constructThemeVariables";

import { useToken } from "../hooks/useToken";

export interface TokenPriceWidgetProps {
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
        "px-5 py-4 min-w-56",
        "bg-[var(--background-color)] [font-family:var(--font-family)] text-[var(--text-color)]",
        "[border:1px_solid_var(--border-color)] rounded-[var(--border-radius)]",
        "[box-shadow:0_4px_6px_-1px_rgb(0_0_0_/_0.1),0_2px_4px_-2px_rgb(0_0_0_/_0.1)]"
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
