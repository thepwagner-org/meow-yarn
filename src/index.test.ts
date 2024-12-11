import { isMeow } from "./index";

describe("isMeow", () => {
  it("should return true for valid cat sounds", () => {
    expect(isMeow("meow")).toBe(true);
    expect(isMeow("MEOW")).toBe(true);
    expect(isMeow("nyaa")).toBe(true);
    expect(isMeow("miau")).toBe(true);
  });

  it("should return false for invalid cat sounds", () => {
    expect(isMeow("woof")).toBe(false);
    expect(isMeow("bark")).toBe(false);
    expect(isMeow("hello")).toBe(false);
  });

  it("should return false for empty or invalid inputs", () => {
    expect(isMeow("")).toBe(false);
    expect(isMeow(" ")).toBe(false);
    expect(isMeow(undefined as unknown as string)).toBe(false);
    expect(isMeow(null as unknown as string)).toBe(false);
  });
});
