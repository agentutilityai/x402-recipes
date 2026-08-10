import { describe, expect, test } from "bun:test";
import { buildImageRequest } from "./request.mjs";

describe("image-generate recipe request", () => {
  test("builds a controlled repeat request from explicit image inputs", () => {
    expect(
      buildImageRequest({
        IMAGE_PROMPT: "same bicycle outside a bakery at dusk",
        IMAGE_TIER: "creative",
        IMAGE_WIDTH: "1024",
        IMAGE_HEIGHT: "768",
        IMAGE_SEED: "184729",
      }),
    ).toEqual({
      prompt: "same bicycle outside a bakery at dusk",
      tier: "creative",
      width: 1024,
      height: 768,
      seed: 184729,
    });
  });

  test("uses the documented draft defaults when no inputs are set", () => {
    expect(buildImageRequest({})).toEqual({
      prompt: "a red bicycle leaning against a brick wall, morning light",
      tier: "fast",
    });
  });

  test("rejects a non-integer seed before a paid request", () => {
    expect(() => buildImageRequest({ IMAGE_SEED: "one" })).toThrow("IMAGE_SEED must be an integer");
  });
});
