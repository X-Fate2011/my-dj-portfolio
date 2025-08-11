import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import Footer from "./Footer";
import { describe, it, expect } from "vitest";

describe("Footer", () => {
    it("Footer renders correctly", () => {
        render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        );
        expect(screen.getByRole("contentinfo")).toBeInTheDocument();
    });
    
    it("Social media links are correct", async () => {
        render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        );
        const instagramLink = screen.getByLabelText(/X-Fate auf Instagram/i);
        expect(instagramLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(instagramLink).toHaveAttribute("target", "_blank");
        expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/x_fate");
        
        const mixcloudLink = screen.getByLabelText(/X-Fate auf Mixcloud/i);
        expect(mixcloudLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(mixcloudLink).toHaveAttribute("target", "_blank");
        expect(mixcloudLink).toHaveAttribute("href", "https://www.mixcloud.com/x_fate");
        
        const twitchLink = screen.getByLabelText(/TrueDedicationMusic auf Twitch/i);
        expect(twitchLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(twitchLink).toHaveAttribute("target", "_blank");
        expect(twitchLink).toHaveAttribute("href", "https://www.mixcloud.com/truededicationmusic");
    });
    
    it("Copyright text renders correctly", async () => {
        render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        );
        const copyrightNotice = screen.getByLabelText(/Copyright Info/i);
        expect(copyrightNotice).toHaveTextContent(`© ${new Date().getFullYear()} X-Fate. Alle Rechte vorbehalten.`)
    });
    
    it("Imprint and privacy render correctly", async () => {
        render(
            <MemoryRouter>
                <Footer/>
            </MemoryRouter>
        );
        const imprintLink = screen.getByLabelText(/Impressum/i);
        expect(imprintLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(imprintLink).toHaveAttribute("href", "/imprint");
        
        const privacyLink = screen.getByLabelText(/Datenschutzerklärung/i);
        expect(privacyLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(privacyLink).toHaveAttribute("href", "/privacy");
    });
    
    it("Other accessibility tests", async () => {
        const { container } = render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );
        
        const links = screen.getAllByRole("link");
        
        links.forEach(link => {
            expect(link.tabIndex).toBeGreaterThanOrEqual(0);
        });
        
        links.forEach(element => {
            expect(element).toHaveAttribute("aria-label");
            expect(element.getAttribute("aria-label")?.trim().length).toBeGreaterThan(0);
        });
        
        expect(container).toMatchSnapshot();
    });
});