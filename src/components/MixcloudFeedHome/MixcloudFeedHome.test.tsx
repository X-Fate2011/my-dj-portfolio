import { describe, it, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";

vi.mock("../../hooks/useCookieConsent.ts", () => ({
    useCookieConsent: vi.fn(),
}));

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

vi.mock("../MixcloudPlayer/MixcloudPlayer.tsx", () => ({
    __esModule: true,
    default: () => <div data-testid="mixcloud-player" />,
}));

import MixcloudFeedHome from "./MixcloudFeedHome";
import { useCookieConsent } from "../../hooks/useCookieConsent.ts";
import { MemoryRouter } from "react-router-dom";

describe("MixcloudFeedHome", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });
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
    
    it("renders MixcloudPlayer when consent is given", () => {
        // @ts-expect-error vi is not found by tsc
        (useCookieConsent as unknown as vi.Mock).mockReturnValue(true);
        
        render(<MixcloudFeedHome />);
        
        expect(screen.getByRole("heading", { name: "home.mixcloudFeedHomeTitle" })).toBeInTheDocument();
        expect(screen.getByTestId("mixcloud-player")).toBeInTheDocument();
    });
    
    it("renders cookie note when no consent is given", () => {
        render(<MemoryRouter><MixcloudFeedHome /></MemoryRouter>);
        
        expect(screen.getByRole("heading", { name: "home.mixcloudFeedHomeTitle" })).toBeInTheDocument();
        expect(screen.getByText("home.mixcloudFeedHomeCookieNote")).toBeInTheDocument();
    });
});
