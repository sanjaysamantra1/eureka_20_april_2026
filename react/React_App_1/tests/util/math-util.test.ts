import { describe, expect, test } from "vitest";
import add, { sumOfDigits } from "../../src/utils/math.utils";

describe("This is Test Suite For Math file", () => {
  test("Should Test add function", () => {
    expect(add(10, 20)).toBe(30);
    expect(add(-10, 20)).toBe(10);
    expect(add(10, -20)).toBe(-10);
    expect(add(-10, -20)).toBe(-30);
  });

  test("Should Test sumofdigits function", () => {
    expect(sumOfDigits(125)).toBe(8);
  });
});
