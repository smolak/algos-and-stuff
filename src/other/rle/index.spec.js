import { expect } from "chai";
import { rle } from "./index";

describe("rle", () => {
  it("should compress strings", () => {
    const testData = [
      { input: "AABBCCCAD", output: "A2B2C3AD" },
      { input: "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBB", output: "A4B3C2XYZD4E3F3A6B21" },
      { input: "A", output: "A" },
    ];

    testData.forEach(({ input, output }) => {
      expect(rle(input)).to.equal(output);
    });
  });
});
