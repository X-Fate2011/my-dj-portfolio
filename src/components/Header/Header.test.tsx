import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { vi } from "vitest";
import type { NavigationLinksProps } from "./subcomponents/NavigationLinks";
import type { BurgerMenuProps } from "./subcomponents/BurgerMenu";
import { MemoryRouter } from "react-router-dom";
import type { ReactElement } from "react";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

vi.mock("./subcomponents/BurgerMenu", () => ({
    BurgerMenu: ({ burgerVisible, isMenuOpen, toggleMenu }: BurgerMenuProps) => (
        <button
            data-testid="burger"
            onClick={toggleMenu}
            style={{ display: burgerVisible ? "block" : "none" }}
        >
            {isMenuOpen ? "open" : "closed"}
        </button>
    ),
}));

vi.mock("./subcomponents/NavigationLinks", () => ({
    NavigationLinks: ({ closeMenu }: NavigationLinksProps) => (
        <nav data-testid="nav" onClick={closeMenu}>Links</nav>
    ),
}));

const mockUseIsDesktop = vi.fn();
const mockUseOnEscape = vi.fn();
const mockUseScrollLock = vi.fn();

vi.mock("../../hooks/useIsDesktop", () => ({
    useIsDesktop: (bp: number) => mockUseIsDesktop(bp),
}));
vi.mock("../../hooks/useOnEscape", () => ({
    useOnEscape: (cb: () => void) => mockUseOnEscape(cb),
}));
vi.mock("../../hooks/useScrollLock", () => ({
    useScrollLock: (isOpen: boolean) => mockUseScrollLock(isOpen),
}));

const renderWithRouter = (ui: ReactElement) => {
    return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("Header", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    
    it("renders logo with alt text from translations", () => {
        mockUseIsDesktop.mockReturnValue(true);
        
        renderWithRouter(<Header />);
        const logo = screen.getByRole("img", { name: "header.logoAltLabel" });
        expect(logo).toBeInTheDocument();
        
        const link = screen.getByRole("link", { name: "header.logoLinkAriaLabel" });
        expect(link).toHaveAttribute("href", "/");
    });
    
    it("shows BurgerMenu on mobile and nav on desktop", () => {
        mockUseIsDesktop.mockReturnValue(false);
        renderWithRouter(<Header />);
        expect(screen.getByTestId("burger")).toBeVisible();
        
        mockUseIsDesktop.mockReturnValue(true);
        renderWithRouter(<Header />);
        const navItems = screen.getAllByTestId("nav");
        for (const navItem of navItems) {
            expect(navItem).toBeInTheDocument();
        }
    });
    
    it("toggles mobile menu when BurgerMenu clicked", () => {
        mockUseIsDesktop.mockReturnValue(false);
        renderWithRouter(<Header />);
        const burger = screen.getByTestId("burger");
        
        let aside = screen.getByRole("complementary");
        expect(aside.className).toMatch(/translate-x-full/);
        
        fireEvent.click(burger);
        aside = screen.getByRole("complementary");
        expect(aside.className).toMatch(/translate-x-0/);
        
        fireEvent.click(burger);
        aside = screen.getByRole("complementary");
        expect(aside.className).toMatch(/translate-x-full/);
    });
    
    it("calls useScrollLock with isOpen", () => {
        mockUseIsDesktop.mockReturnValue(false);
        renderWithRouter(<Header />);
        expect(mockUseScrollLock).toHaveBeenCalledWith(false);
    });
});
