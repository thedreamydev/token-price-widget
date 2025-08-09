import { render, screen } from "@testing-library/react";
import TokenError from "../components/TokenError";

describe("TokenError Component", () => {
  it("renders the passed error message", () => {
    render(<TokenError message="Something went wrong" />);
    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
  });

  it("has role alert for accessibility", () => {
    render(<TokenError message="Error loading token data" />);
    const alertEl = screen.getByRole("alert");
    expect(alertEl).toBeInTheDocument();
    // It should have the aria-label from the component
    expect(alertEl).toHaveAttribute("aria-label", "Token Price Error");
  });

  it("applies correct styling classes", () => {
    render(<TokenError message="Network error" />);
    const messageEl = screen.getByText("Network error");
    expect(messageEl).toHaveClass("text-center", "text-sm", "text-red-600");
  });
});
