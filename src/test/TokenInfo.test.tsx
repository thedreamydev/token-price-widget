import { render, screen } from "@testing-library/react";
import TokenInfo from "../components/TokenInfo";
import type { Token } from "../types";

// Mock the currency formatting util to avoid locale differences in testing
vi.mock("../utils/formatUsdPrice", () => ({
  formatUsdPrice: (value: number) => `$${value.toFixed(2)}`,
}));

describe("TokenInfo Component", () => {
  const baseToken: Token = {
    symbol: "ETH",
    name: "Ethereum",
    image: "https://example.com/eth.png",
    priceUsd: 12345.678,
    change24h: 5.67,
  };

  it("renders token symbol and name-related UI", () => {
    render(<TokenInfo token={baseToken} />);
    expect(screen.getByLabelText(/Token Symbol/i)).toHaveTextContent("ETH");
  });

  it("renders token image when provided", () => {
    render(<TokenInfo token={baseToken} />);
    const img = screen.getByRole("img", { name: /Ethereum logo/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", baseToken.image);
    expect(img).toHaveAttribute("alt", `${baseToken.name} logo`);
  });

  it("does not render img tag when image is missing", () => {
    const tokenWithoutImage = { ...baseToken, image: "" };
    render(<TokenInfo token={tokenWithoutImage} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("renders formatted price when priceUsd is provided", () => {
    render(<TokenInfo token={baseToken} />);
    expect(screen.getByLabelText(/Token Price/i)).toHaveTextContent(
      `$12345.68`
    );
  });

  it("renders $0.00 when priceUsd is null", () => {
    const tokenWithNoPrice = { ...baseToken, priceUsd: null };
    render(<TokenInfo token={tokenWithNoPrice} />);
    expect(screen.getByLabelText(/Token Price/i)).toHaveTextContent(`$0.00`);
  });
});
