import { useEffect, useState } from "react";

import type { Token } from "../types";

import { getPlatformName } from "../utils/getPlatformName";

/**
 * Custom React hook to fetch token metadata and market info from CoinGecko API.
 *
 * @param chainId - The EVM-compatible chain ID (e.g., 1 for Ethereum, 56 for BSC).
 * @param contractAddress - The token's smart contract address on that chain.
 * @returns Object with `data`, `loading`, and `error` for rendering states.
 *
 * Fetch lifecycle:
 * - Cancels in-flight requests if chainId or contractAddress changes before completion
 * - Handles CoinGecko rate limit, not found, and general HTTP errors
 * - Maps API response to a simplified `TokenInfo` shape
 */
export function useToken(
  chainId: number,
  contractAddress: string,
  refreshInterval: number
) {
  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!chainId || !contractAddress) {
      setLoading(false);
      setError("Chain id or token address cannot be empty.");
      return;
    }

    const platform = getPlatformName(chainId);
    if (!platform) {
      setError(`Unsupported chain ID: ${chainId}`);
      setLoading(false);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    const fetchData = async (isInitialLoad = false) => {
      if (isInitialLoad) {
        setLoading(true);
      }
      setError(null);

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/${platform}/contract/${contractAddress}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          if (res.status === 429) {
            throw new Error("Rate limit exceeded. Please try again later.");
          }

          if (res.status === 404) {
            throw new Error("Token not found.");
          }

          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();

        const tokenData: Token = {
          name: data.name ?? "",
          symbol: data.symbol?.toUpperCase() ?? "",
          image: data.image?.small ?? data.image?.thumb ?? null,
          priceUsd: data.market_data?.current_price?.usd ?? null,
          change24h: data.market_data?.price_change_percentage_24h ?? null,
        };

        if (isMounted) setToken(tokenData);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return; // request was aborted
        }
        if (isMounted) {
          setError(
            err instanceof Error ? err.message : "An unexpected error occurred."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    // First fetch as "loading"
    fetchData(true);

    // Set up polling with interval if refreshInterval > 0
    let timer: number | undefined;
    if (refreshInterval > 0) {
      timer = window.setInterval(() => fetchData(false), refreshInterval);
    }

    return () => {
      isMounted = false;
      controller.abort(); // cancel any in-flight requests
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [chainId, contractAddress, refreshInterval]);

  return { token, loading, error };
}
