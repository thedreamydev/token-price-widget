import { render, screen } from "@testing-library/react";
import PriceChange from "../components/PriceChange";

describe("PriceChange Component", () => {
  it("renders empty span if change24h is null", () => {
    const { container } = render(<PriceChange change24h={null} />);
    // Empty span should render
    expect(container.querySelector("span")).toBeInTheDocument();
    // The span should have no text content
    expect(container.querySelector("span")?.textContent).toBe("");
  });

  it("renders empty span if change24h is NaN", () => {
    const { container } = render(<PriceChange change24h={NaN} />);
    // Empty span should render
    expect(container.querySelector("span")).toBeInTheDocument();
    // The span should have no text content
    expect(container.querySelector("span")?.textContent).toBe("");
  });

  it("renders positive price change with green color and up arrow SVG", () => {
    render(<PriceChange change24h={5.1234} />);
    const wrapper = screen.getByText(/5.12%/).parentElement;
    expect(wrapper).toHaveClass("text-green-500");

    // The text content should be formatted to 2 decimals with % sign
    expect(screen.getByText("5.12%")).toBeInTheDocument();

    // Check if svg indicating positive (up arrow) exists by checking the path d attribute pattern
    const svg = wrapper?.querySelector("svg");
    expect(svg).toBeInTheDocument();
    // Verify the svg paths for the up arrow (matching one expected path from component)
    expect(svg?.innerHTML).toContain("M16 7h6v6");
  });

  it("renders negative price change with red color and down arrow SVG", () => {
    render(<PriceChange change24h={-3.987} />);
    const wrapper = screen.getByText(/-3.99%/).parentElement;
    expect(wrapper).toHaveClass("text-red-500");

    // The text content should be formatted to 2 decimals with % sign
    expect(screen.getByText("-3.99%")).toBeInTheDocument();

    // Check if svg indicating negative (down arrow) exists by checking the path d attribute pattern
    const svg = wrapper?.querySelector("svg");
    expect(svg).toBeInTheDocument();
    // Verify the svg paths for the down arrow (matching one expected path from component)
    expect(svg?.innerHTML).toContain("M16 17h6v-6");
  });
});
