import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
  it("Footer renders correctly", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("Other accessibility tests", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const links = screen.getAllByRole("link");

    links.forEach((link) => {
      expect(link.tabIndex).toBeGreaterThanOrEqual(0);
    });

    links.forEach((element) => {
      expect(element).toHaveAttribute("aria-label");
      expect(element.getAttribute("aria-label")?.trim().length).toBeGreaterThan(0);
    });
  });
});
