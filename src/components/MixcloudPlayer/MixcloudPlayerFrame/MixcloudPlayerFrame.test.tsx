import { render, screen } from "@testing-library/react";
import { MixcloudPlayerFrame } from "./MixcloudPlayerFrame";
import { describe, it, expect } from "vitest";
import { MOCK_DATA } from "../../../mock/mixcloud-mock";

describe("MixcloudPlayerFrame", () => {
  it("renders a wrapping div with the given customClass", () => {
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={MOCK_DATA[0].url}
        hideArtwork={false}
        customClass={"w-full"}
      />
    );
    const frameWrapper = screen.getByTestId("frameWrapper");
    expect(frameWrapper).toHaveAttribute("class", "w-full");
  });

  it("renders an iframe inside the wrapping div", () => {
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={MOCK_DATA[0].url}
        hideArtwork={false}
        customClass={"w-full"}
      />
    );
    const frameWrapper = screen.getByTestId("frameWrapper");
    expect(frameWrapper.firstChild).toBeInTheDocument();
  });

  it("sets the iframe title to the given showTitle", () => {
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={MOCK_DATA[0].url}
        hideArtwork={false}
        customClass={"w-full"}
      />
    );
    const frame = screen.getByTestId("frame");
    expect(frame).toHaveAttribute("title", MOCK_DATA[0].name);
  });

  it("sets the iframe src to include the encoded showUrl", () => {
    const hideArtwork = false;
    const showUrl = MOCK_DATA[0].url;
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={showUrl}
        hideArtwork={hideArtwork}
        customClass={"w-full"}
      />
    );
    const frame = screen.getByTestId("frame");

    const src = `https://player-widget.mixcloud.com/widget/iframe/?feed=${encodeURIComponent(showUrl)}&light=1&hide_artwork=${hideArtwork ? "1" : "0"}&hide_cover=1&mini=1`;
    expect(frame).toHaveAttribute("src", src);
  });

  it("adds hide_artwork=1 to the src when hideArtwork is true", () => {
    const hideArtwork = true;
    const showUrl = MOCK_DATA[0].url;
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={showUrl}
        hideArtwork={hideArtwork}
        customClass={"w-full"}
      />
    );
    const frame = screen.getByTestId("frame");
    const src = frame.getAttribute("src");

    expect(src).toContain("hide_artwork=1");
  });

  it("adds hide_artwork=0 to the src when hideArtwork is false", () => {
    const hideArtwork = false;
    const showUrl = MOCK_DATA[0].url;
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={showUrl}
        hideArtwork={hideArtwork}
        customClass={"w-full"}
      />
    );
    const frame = screen.getByTestId("frame");
    const src = frame.getAttribute("src");

    expect(src).toContain("hide_artwork=0");
  });

  it("applies width='100%' and height='60' and class 'w-full' to the iframe", () => {
    const hideArtwork = false;
    const showUrl = MOCK_DATA[0].url;
    render(
      <MixcloudPlayerFrame
        showTitle={MOCK_DATA[0].name}
        showUrl={showUrl}
        hideArtwork={hideArtwork}
        customClass={"w-full"}
      />
    );
    const frame = screen.getByTestId("frame");

    expect(frame).toHaveAttribute("width", "100%");
    expect(frame).toHaveAttribute("height", "60");
    expect(frame).toHaveClass("w-full");
  });
});
