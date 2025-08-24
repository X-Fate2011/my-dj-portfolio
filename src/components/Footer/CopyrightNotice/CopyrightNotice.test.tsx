import { render, screen } from "@testing-library/react";
import { CopyrightNotice } from "./CopyrightNotice";
import { expect, it } from "vitest";

describe("CopyrightNotice", () => {
    it("Copyright text renders correctly", async () => {
        render(
            <CopyrightNotice/>
        );
        const copyrightNotice = screen.getByLabelText(/copyrightAriaLabel/i);
        expect(copyrightNotice).toHaveTextContent("copyrightAnchor")
    });
});
