import { fireEvent, render, screen } from "@testing-library/react";
import { LoadMoreShows } from "./LoadMoreShows";
import { describe, it, expect } from "vitest";

describe("LoadMoreShows", () => {
    it("renders nothing when hasMore is false", () => {
        const handleFetchMixes = vi.fn();
        const { container } = render(<LoadMoreShows hasMore={false} isLoading={false} handleFetchMixes={handleFetchMixes} />)
        expect(container).toBeEmptyDOMElement();
    });
    
    it("renders a button when hasMore is true", () => {
        const handleFetchMixes = vi.fn();
        render(<LoadMoreShows hasMore={true} isLoading={false} handleFetchMixes={handleFetchMixes} />)
        
        const button = screen.getByRole("button", { name: /mixcloudLoadMoreLabel/i });
        expect(button).toBeInTheDocument();
    });
    
    it("calls handleFetchMixes when the button is clicked", () => {
        const handleFetchMixes = vi.fn();
        render(<LoadMoreShows hasMore={true} isLoading={false} handleFetchMixes={handleFetchMixes} />)
        
        const button = screen.getByRole("button", { name: /mixcloudLoadMoreLabel/i });
        fireEvent.click(button);
        expect(handleFetchMixes).toHaveBeenCalledTimes(1);
    });
    
    it("disables the button when isLoading is true", () => {
        const handleFetchMixes = vi.fn();
        render(<LoadMoreShows hasMore={true} isLoading={true} handleFetchMixes={handleFetchMixes} />)
        
        const button = screen.getByRole("button", { name: /mixcloudLoadMoreBtnIsLoadingLabel/i });
        expect(button).toHaveAttribute("disabled", "");
    });
    
    it("renders the loading label from translations when isLoading is true", () => {
        const handleFetchMixes = vi.fn();
        render(<LoadMoreShows hasMore={true} isLoading={true} handleFetchMixes={handleFetchMixes} />)
        
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("mixcloudLoadMoreBtnIsLoadingLabel");
    });
    
    it("applies the correct styling classes to the button", () => {
        const handleFetchMixes = vi.fn();
        render(<LoadMoreShows hasMore={true} isLoading={true} handleFetchMixes={handleFetchMixes} />)
        
        const button = screen.getByRole("button");
        expect(button).toHaveClass("disabled:opacity-50");
    });
});
