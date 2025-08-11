import { render, screen } from "@testing-library/react";
import CookieOverlay from "./CookieOverlay";
import { describe, it, expect } from "vitest";
import { act } from "react";

describe("CookieOverlay", () => {
    it("shows up when visible is true & have the correct classes set", () => {
        render(<CookieOverlay visible={true} />);
        const overlay = screen.getByTestId("cookie-overlay");
        expect(overlay).toBeInTheDocument();
        expect(overlay).toHaveClass("pointer-events-none", { exact: false });
    });
    it("gets removed after user clicks accept", async () => {
        vi.useFakeTimers();
        const { rerender } = render(<CookieOverlay visible={true} />);
        rerender(<CookieOverlay visible={false} />);
        
        const overlay = screen.getByTestId("cookie-overlay")
        expect(overlay).toBeInTheDocument();
        expect(overlay).toHaveClass("opacity-0", { exact: false });
        
        act(() => {
            vi.advanceTimersByTime(500);
        })

        expect(screen.queryByTestId("cookie-overlay")).toBeNull();
    });
});