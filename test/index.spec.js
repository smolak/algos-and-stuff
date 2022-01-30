import { expect } from "chai";
import { foo } from "../index";

describe("foo function", () => {
  it("should return bar", () => {
    expect(foo()).to.equal("bar");
  });
});
