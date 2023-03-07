import { describe, it, expect } from "vitest";
import Queue from "./queue";

describe("Queue data structure", () => {
  it("should obey the FIFO (first in first out principle", () => {
    const queue = new Queue();
    queue.enqueue("Uniport");
    queue.enqueue("Uniben");
    queue.enqueue("Unilag");

    const dequeued = queue.dequeue();

    expect(dequeued).toBe("Uniport");
  });
});
