import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { expect, it } from "vitest";
import Footer from "../Footer";

describe("LegalLinks", () => {
  it("Imprint and privacy render correctly", async () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const imprintLink = screen.getByLabelText(/imprintAriaLabel/i);
    expect(imprintLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(imprintLink).toHaveAttribute("href", "/imprint");

    const privacyLink = screen.getByLabelText(/privacyAriaLabel/i);
    expect(privacyLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });
});
