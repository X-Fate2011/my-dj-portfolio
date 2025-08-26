import { render, screen } from "@testing-library/react";
import CookieBanner from "./CookieBanner";
import { describe, it, expect } from "vitest";
import { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";
import userEvent from "@testing-library/user-event";

const COOKIE_CONSENT_NAME = "siteConsent";
describe("CookieBanner", () => {
  it("renders without crashing", () => {
    resetCookieConsentValue(COOKIE_CONSENT_NAME);
    render(<CookieBanner onAccept={() => {}} onDecline={() => {}} />);
    expect(screen.getByText(/notice/i)).toBeInTheDocument();
  });
  it("user can accept cookies", async () => {
    resetCookieConsentValue(COOKIE_CONSENT_NAME);
    const handleAccept = vi.fn();
    render(<CookieBanner onAccept={handleAccept} onDecline={() => {}} />);

    const acceptBtn = screen.getByRole("button", { name: /Accept cookies/i });
    await userEvent.click(acceptBtn);

    expect(getCookieConsentValue(COOKIE_CONSENT_NAME)).toBe("true");
  });
  it("user can decline cookies", async () => {
    resetCookieConsentValue(COOKIE_CONSENT_NAME);
    const handleDecline = vi.fn();
    render(<CookieBanner onAccept={() => {}} onDecline={handleDecline} />);

    const declineBtn = screen.getByRole("button", { name: /Decline cookies/i });
    await userEvent.click(declineBtn);

    expect(getCookieConsentValue(COOKIE_CONSENT_NAME)).toBe("false");
  });
});
