/**
 * Formats a numeric price value as a USD currency string.
 *
 * @param price - The numeric price to format.
 * @returns The formatted USD price string, or "-" if the input is not a valid number.
 *
 * @example
 * ```typescript
 * formatUsdPrice(1234.5678); // "$1,234.5678"
 * formatUsdPrice(NaN);       // "-"
 * ```
 */
export function formatUsdPrice(price: number): string {
  if (isNaN(price)) return "-";
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 8,
  });
}
