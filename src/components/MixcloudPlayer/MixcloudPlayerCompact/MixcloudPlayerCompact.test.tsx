import { render, screen } from "@testing-library/react";
import { MixcloudPlayerCompact } from "./MixcloudPlayerCompact";
import { MixcloudPlayerFrame } from "../MixcloudPlayerFrame/MixcloudPlayerFrame";
import { describe, it, expect as vitestExpect } from "vitest";
import { MOCK_DATA } from "../../../mock/mixcloud-mock";

vi.mock("../MixcloudPlayerFrame/MixcloudPlayerFrame", () => ({
    MixcloudPlayerFrame: vi.fn(() => null)
}));

describe("MixcloudPlayerCompact", () => {
    it("renders nothing when variant is not 'compact'", () => {
        const { container } = render(<MixcloudPlayerCompact variant={"list"} shows={[]} />);
        vitestExpect(container).toBeEmptyDOMElement();
    });
    
    it("renders a container div with grid styling when variant is 'compact'", () => {
        render(<MixcloudPlayerCompact variant={"compact"} shows={[]} />)
        const wrapper = screen.getByTestId("mixcloudPlayerFrameWrapper");
        expect(wrapper).toHaveClass("grid", { exact: false });
    });
    
    it("renders one MixcloudPlayerFrame per show item", () => {
        render(<MixcloudPlayerCompact variant="compact" shows={MOCK_DATA} />);
        expect(MixcloudPlayerFrame).toHaveBeenCalledTimes(MOCK_DATA.length);
    });
    
    it("renders no children when shows array is empty", () => {
        render(<MixcloudPlayerCompact variant="compact" shows={[]} />);
        const wrapper = screen.getByTestId("mixcloudPlayerFrameWrapper");
        expect(wrapper).toBeEmptyDOMElement();
    });
});