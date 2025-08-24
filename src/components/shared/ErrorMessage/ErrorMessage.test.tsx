import { render, screen, fireEvent } from "@testing-library/react";
import { ErrorMessage } from "./ErrorMessage";

describe("ErrorMessage", () => {
    it("renders default message", () => {
        render(<ErrorMessage />);
        expect(screen.getByText(/Etwas ist schiefgelaufen/i)).toBeInTheDocument();
    });
    
    it("renders custom message", () => {
        render(<ErrorMessage message="Test-Fehler" />);
        expect(screen.getByText(/Test-Fehler/i)).toBeInTheDocument();
    });
    
    it("renders retry button and calls onRetry when clicked", () => {
        const onRetry = vi.fn();
        render(<ErrorMessage message="Test" onRetry={onRetry} />);
        
        const button = screen.getByRole("button", { name: /erneut versuchen/i });
        expect(button).toBeInTheDocument();
        
        fireEvent.click(button);
        expect(onRetry).toHaveBeenCalledTimes(1);
    });
    
    it("does not render retry button if onRetry is not provided", () => {
        render(<ErrorMessage message="Test" />);
        const button = screen.queryByRole("button", { name: /erneut versuchen/i });
        expect(button).toBeNull();
    });
});
