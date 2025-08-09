/**
 * Maps an EVM-compatible chain ID to the corresponding
 * CoinGecko platform slug used in API URLs.
 *
 * @param chainId - The numeric chain ID (e.g., 1 for Ethereum, 56 for BSC).
 * @returns The platform slug as a string, or null if unsupported.
 */
export function getPlatformName(chainId: number): string | null {
  const mapping: Record<number, string> = {
    1: "ethereum",
    56: "binance-smart-chain",
  };

  return mapping[chainId] ?? null;
}
