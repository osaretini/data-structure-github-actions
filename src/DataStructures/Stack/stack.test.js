import Stack from "./stack";
import { describe, it, expect } from "vitest";

describe("Stack", () => {
  it("should obey the LIFO (last in first out) principle", () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(6);
    stack.push(5);

    const pop = stack.pop();
    expect(pop).toBe(5);
  });

  it("peek should return the last item in the stack", () => {
    const stack = new Stack();
    stack.push(2);
    stack.push(6);
    stack.push(5);

    const pop = stack.peek();
    expect(pop).toBe(5);
  });
});
