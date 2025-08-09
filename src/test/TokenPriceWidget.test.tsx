import { vi, type Mock } from "vitest";
import { render, screen } from "@testing-library/react";
import TokenPriceWidget from "../components/TokenPriceWidget";

import type { Token } from "../types";
import { useToken } from "../hooks/useToken";

// Mock all dependent child components
vi.mock("./TokenSkeleton", () => ({
  default: () => <div data-testid="token-skeleton">Skeleton</div>,
}));
vi.mock("./TokenError", () => ({
  default: ({ message }: { message: string }) => (
    <div data-testid="token-error">{message}</div>
  ),
}));
vi.mock("./TokenInfo", () => ({
  default: ({ token }: { token: Token }) => (
    <div data-testid="token-info">{token.symbol}</div>
  ),
}));

// Mock utilities
vi.mock("../utils/cn", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));
vi.mock("../utils/constructThemeVariables", () => ({
  constructThemeVariables: () => ({ "--background-color": "#fff" }),
}));

// Mock hook
vi.mock("../hooks/useToken", () => ({
  useToken: vi.fn(),
}));

describe("TokenPriceWidget", () => {
  const defaultProps = {
    tokenAddress: "0x123",
    chainId: 1,
    refreshInterval: 60000,
  };

  it("renders loading state with TokenSkeleton", () => {
    (useToken as Mock).mockReturnValue({
      token: null,
      loading: true,
      error: null,
    });

    render(<TokenPriceWidget {...defaultProps} />);

    expect(
      screen.getByRole("status", { name: /Loading Token Price/i })
    ).toBeInTheDocument();

    expect(screen.queryByTestId("token-error")).not.toBeInTheDocument();
    expect(screen.queryByTestId("token-info")).not.toBeInTheDocument();
  });

  it("renders error state when error is returned", () => {
    (useToken as Mock).mockReturnValue({
      token: null,
      loading: false,
      error: "Something went wrong",
    });

    render(<TokenPriceWidget {...defaultProps} />);

    const alertEl = screen.getByRole("alert", { name: /Token Price Error/i });
    expect(alertEl).toBeInTheDocument();
    expect(alertEl).toHaveTextContent("Something went wrong");

    // Ensure others aren't rendered
    expect(screen.queryByRole("status")).not.toBeInTheDocument(); // no skeleton
    expect(screen.queryByLabelText(/Token Symbol/i)).not.toBeInTheDocument(); // no token info
  });

  it("renders error state when token is missing but no error string", () => {
    (useToken as unknown as Mock).mockReturnValue({
      token: null,
      loading: false,
      error: null,
    });

    render(<TokenPriceWidget {...defaultProps} />);

    // use role + accessible name instead of data-testid
    const alertEl = screen.getByRole("alert", { name: /Token Price Error/i });
    expect(alertEl).toHaveTextContent("Failed to load token data.");
  });

  it("renders token info when token data is available", () => {
    const mockToken = {
      symbol: "ETH",
      name: "Ethereum",
      image: "eth.png",
      priceUsd: 20000,
      change24h: 3.5,
    };

    (useToken as Mock).mockReturnValue({
      token: mockToken,
      loading: false,
      error: null,
    });

    render(<TokenPriceWidget {...defaultProps} />);

    // Query for token symbol by aria-label
    expect(screen.getByLabelText(/Token Symbol/i)).toHaveTextContent("ETH");

    // Ensure error message is not present
    expect(
      screen.queryByRole("alert", { name: /Token Price Error/i })
    ).not.toBeInTheDocument();

    // Ensure skeleton not present
    expect(
      screen.queryByRole("status", { name: /Loading Token Price/i })
    ).not.toBeInTheDocument();
  });

  it("applies theme variables to style attribute", () => {
    (useToken as Mock).mockReturnValue({
      token: null,
      loading: true,
      error: null,
    });

    const { container } = render(<TokenPriceWidget {...defaultProps} />);
    expect(container.firstChild).toHaveStyle({ "--background-color": "#fff" });
  });

  it("has correct accessibility attributes", () => {
    (useToken as Mock).mockReturnValue({
      token: null,
      loading: true,
      error: null,
    });

    render(<TokenPriceWidget {...defaultProps} />);
    const widget = screen.getByRole("region", { name: /Token Price Widget/i });
    expect(widget).toBeInTheDocument();
  });
});
