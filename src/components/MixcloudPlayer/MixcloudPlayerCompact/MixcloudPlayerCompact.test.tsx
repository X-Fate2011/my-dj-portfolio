import { render, screen } from "@testing-library/react";
import { MixcloudPlayerCompact } from "./MixcloudPlayerCompact";
import { MixcloudPlayerFrame } from "../MixcloudPlayerFrame/MixcloudPlayerFrame";
import { describe, it, expect as vitestExpect } from "vitest";
import { MOCK_DATA } from "../../../mock/mixcloud-mock";
import { MemoryRouter } from "react-router-dom";

vi.mock("../MixcloudPlayerFrame/MixcloudPlayerFrame", () => ({
    MixcloudPlayerFrame: vi.fn(() => null)
}));

describe("MixcloudPlayerCompact", () => {
    it("renders nothing when variant is not 'compact'", () => {
        const { container } = render(<MemoryRouter><MixcloudPlayerCompact variant={"list"} shows={[]} /></MemoryRouter>);
        vitestExpect(container).toBeEmptyDOMElement();
    });
    
    it("renders a container div with grid styling when variant is 'compact'", () => {
        render(<MemoryRouter><MixcloudPlayerCompact variant={"compact"} shows={[]} /></MemoryRouter>)
        const wrapper = screen.getByTestId("mixcloudPlayerFrameWrapper");
        expect(wrapper).toHaveClass("grid", { exact: false });
    });
    
    it("renders one MixcloudPlayerFrame per show item", () => {
        render(<MemoryRouter><MixcloudPlayerCompact variant="compact" shows={MOCK_DATA} /></MemoryRouter>);
        expect(MixcloudPlayerFrame).toHaveBeenCalledTimes(MOCK_DATA.length);
    });
    
    it("renders no Mixcloud player frames when shows array is empty", () => {
        render(<MemoryRouter><MixcloudPlayerCompact variant="compact" shows={[]} /></MemoryRouter>);
        const wrapper = screen.getByTestId("mixcloudPlayerFrameWrapper");
        expect(wrapper.childElementCount).toBe(1);
    });
});