import { screen } from "@testing-library/react";
import { MixcloudPlayerList } from "./MixcloudPlayerList";
import { describe, it, expect } from "vitest";
import { MOCK_DATA } from "../../../mock/mixcloud-mock";
import { renderWithLoadingProvider } from "../../shared/TestUtils/TestHelper";

describe("MixcloudPlayerList", () => {
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

  it("renders nothing when variant is not 'list'", () => {
    const handleFetchMixes = vi.fn();
    const { container } = renderWithLoadingProvider(
      <MixcloudPlayerList
        variant={"compact"}
        shows={[]}
        hasMore={false}
        handleFetchMixes={handleFetchMixes}
      />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("renders a container div with the correct styling when variant is 'list'", () => {
    const handleFetchMixes = vi.fn();
    renderWithLoadingProvider(
      <MixcloudPlayerList
        variant={"list"}
        shows={[]}
        hasMore={false}
        handleFetchMixes={handleFetchMixes}
      />
    );
    const listWrapper = screen.getByTestId("listWrapper");
    expect(listWrapper).toHaveClass("divide-y divide-white-300 space-y-6");
  });

  it("renders one MixcloudShowItem per show item", () => {
    const handleFetchMixes = vi.fn();
    renderWithLoadingProvider(
      <MixcloudPlayerList
        variant={"list"}
        shows={MOCK_DATA}
        hasMore={false}
        handleFetchMixes={handleFetchMixes}
      />
    );
    const covers = screen.getAllByAltText(/^mixcloudListCoverAlt/i);
    expect(covers).toHaveLength(MOCK_DATA.length);
  });

  it("renders all tags using capitalizeTags and applies the correct styling", () => {
    renderWithLoadingProvider(
      <MixcloudPlayerList
        variant="list"
        shows={MOCK_DATA}
        hasMore={false}
        handleFetchMixes={() => {}}
      />
    );

    const tagElements = screen.getAllByTestId("tag");
    tagElements.forEach((tag) => {
      expect(tag).toHaveClass("bg-gray-800", "text-white");
    });
  });

  it("renders no tags when the tags array is empty", () => {
    const EMPTY_TAG_DATA = [{ ...MOCK_DATA[0], tags: [] }];
    renderWithLoadingProvider(
      <MixcloudPlayerList
        variant="list"
        shows={EMPTY_TAG_DATA}
        hasMore={false}
        handleFetchMixes={() => {}}
      />
    );

    expect(screen.getByText("mixcloudListGenre")).toBeInTheDocument();
    const tagSpans = screen.queryAllByRole("listitem");
    expect(tagSpans).toHaveLength(0);
  });
});
