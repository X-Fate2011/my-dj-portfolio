import { describe, it, beforeEach, afterAll, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const originalLocation = window.location;
Object.defineProperty(window, "location", {
    configurable: true,
    value: {
        href: "http://localhost:5173/",
        host: "localhost:5173",
        toString() {
            return this.href;
        },
    },
});

vi.mock("../../hooks/useCookieConsent.ts", () => ({
    useCookieConsent: vi.fn(),
}));

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

import TwitchStream from "./TwitchStream";
import { useCookieConsent } from "../../hooks/useCookieConsent.ts";

describe("TwitchStream", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });
    
    afterAll(() => {
        // restore original location to avoid leaking into other tests
        Object.defineProperty(window, "location", {
            configurable: true,
            value: originalLocation,
        });
    });
    
    it("renders Twitch iframe when consent is given", () => {
        // @ts-expect-error vi is not found by tsc
        (useCookieConsent as unknown as vi.Mock).mockReturnValue(true);
        
        render(<TwitchStream />);
        
        expect(screen.getByRole("heading", { name: "home.twitchStreamTitle" })).toBeInTheDocument();
        
        const iframe = screen.getByTitle("home.twitchStreamFrameTitle") as HTMLIFrameElement;
        expect(iframe).toBeInTheDocument();

        expect(iframe.src).toContain("player.twitch.tv");
        expect(iframe.src).toContain("parent=localhost");
    });
    
    it("renders cookie note when no consent is given", () => {
        // @ts-expect-error vi is not found by tsc
        (useCookieConsent as unknown as vi.Mock).mockReturnValue(false);
        
        render(<TwitchStream />);
        
        expect(screen.getByRole("heading", { name: "home.twitchStreamTitle" })).toBeInTheDocument();
        expect(screen.getByText("home.twitchStreamCookieNote")).toBeInTheDocument();
    });
    
    it("applies center classes to wrapper when consent is given", () => {
        // @ts-expect-error vi is not found by tsc
        (useCookieConsent as unknown as vi.Mock).mockReturnValue(true);
        
        render(<TwitchStream />);
        
        const section = screen.getByRole("heading", { name: "home.twitchStreamTitle" }).closest("section");
        expect(section).toBeTruthy();

        expect(section).toHaveClass("justify-center", "items-center");
    });
});
