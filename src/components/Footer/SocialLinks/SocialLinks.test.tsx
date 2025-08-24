import { render, screen } from "@testing-library/react";
import { SocialLinks } from "./SocialLinks";
import { expect } from "vitest";

describe("SocialLinks", () => {
    it("renders all social media links with correct aria-labels", () => {
        render(
            <SocialLinks />
        );
        
        const instagramLink = screen.getByLabelText(/instagramAriaLabel/i);
        expect(instagramLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(instagramLink).toHaveAttribute("target", "_blank");
        expect(instagramLink).toHaveAttribute("href", "https://www.instagram.com/x_fate");
        
        const mixcloudLink = screen.getByLabelText(/mixcloudAriaLabel/i);
        expect(mixcloudLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(mixcloudLink).toHaveAttribute("target", "_blank");
        expect(mixcloudLink).toHaveAttribute("href", "https://www.mixcloud.com/x_fate");
        
        const twitchLink = screen.getByLabelText(/twitchAriaLabel/i);
        expect(twitchLink).toHaveAttribute("rel", "noopener noreferrer");
        expect(twitchLink).toHaveAttribute("target", "_blank");
        expect(twitchLink).toHaveAttribute("href", "https://twitch.tv/truededicationmusic");
    });
});
