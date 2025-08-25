import { render, screen, fireEvent } from "@testing-library/react";
import MixcloudPlayer from "./MixcloudPlayer";
import { describe, it, expect } from "vitest";
import * as hooks from "../../hooks/useMixcloudShows";

describe("MixcloudPlayer", () => {
    beforeAll(() => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: vi.fn().mockImplementation((query) => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            })),
        });
    });
    
    it("uses the default props when none are provided (limit=2, variant='compact')", () => {
        render(<MixcloudPlayer/>);
        const wrapper = screen.getByTestId("mixcloudPlayerFrameWrapper");
        expect(wrapper).toBeInTheDocument();
        expect(wrapper).toHaveClass("grid"); // class is only set in "compact" layout.
    });
    
    it("renders an ErrorMessage when the hook returns an error", () => {
        vi.spyOn(hooks, "useMixcloudShows").mockReturnValue({
            data: null,
            error: new Error("Something went wrong"),
        });
        
        render(<MixcloudPlayer />);
        
        const errorMessage = screen.getByText(/mixcloudFetchError/i);
        expect(errorMessage).toBeInTheDocument();
    });
    
    it("retries fetching shows by updating the offset when retry is triggered", () => {
        const mockUseMixcloudShows = vi.spyOn(hooks, "useMixcloudShows");
        const offsetState = 0;
        mockUseMixcloudShows.mockImplementation(() => ({
            shows: [],
            offset: offsetState,
            hasMore: true,
            isLoading: false,
            error: true,
        }));
        
        render(<MixcloudPlayer limit={2} variant="compact" />);
        
        const retryButton = screen.getByRole("button", { name: /Erneut versuchen/i });
        expect(retryButton).toBeInTheDocument();
        
        fireEvent.click(retryButton);
        
        mockUseMixcloudShows.mockImplementation((offset) => ({
            shows: [{ key: "1", name: "Test Show", url: "url" }],
            offset,
            hasMore: true,
            isLoading: false,
            error: null,
        }));
        
        render(<MixcloudPlayer limit={2} variant="compact" />);
        
        const showElement = screen.getByTitle("Test Show");
        expect(showElement).toBeInTheDocument();
    });
    
});