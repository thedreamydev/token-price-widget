import type { CSSProperties } from "react";

/**
 * Constructs and returns a set of CSS custom properties (variables) for theming purposes.
 *
 * @returns {CSSProperties} An object containing CSS variable definitions for primary color, background color,
 * text color, border color, border radius, and font family.
 *
 * @remarks
 * These variables can be used to provide a consistent theme across application by applying them
 * to a style context or root element.
 */
export function constructThemeVariables(): CSSProperties {
  return {
    "--primary-color": "#ffffff",
    "--background-color": "#ffffff",
    "--text-color": "#000000",
    "--border-color": "#d1d5db",
    "--border-radius": "0.5rem",
    "--font-family": "system-ui, sans-serif",
  } as CSSProperties;
}
