import { expect } from "chai";
import { Queue } from "./using-array";

describe("Queue specification", () => {
  describe("A new queue", () => {
    it("is empty", () => {
      const queue = new Queue(10);

      expect(queue.length()).to.equal(0);
    });

    it("preserves positive bounding capacity", () => {
      const queue = new Queue(10);

      expect(queue.getCapacity()).to.equal(10);
    });

    it("cannot be created with no bounding capacity provided", () => {
      expect(() => new Queue()).to.throw("Please provide queue's capacity.");
    });

    it("cannot be created with non positive bounding capacity", () => {
      expect(() => new Queue(0)).to.throw("Queue's capacity must be positive.");
    });
  });

  describe("An empty queue", () => {
    it("dequeues an empty value", () => {
      const queue = new Queue(10);

      const value = queue.dequeue();

      expect(value).to.be.undefined;
    });

    it("remains empty when nothing is enqueued", () => {
      const queue = new Queue(10);

      queue.enqueue();
      const length = queue.length();

      expect(length).to.equal(0);
    });

    it("becomes non empty when a value is enqueued", () => {
      const queue = new Queue(10);

      queue.enqueue("anything");

      expect(queue.length()).not.to.equal(0);
    });
  });

  describe("A non empty queue", () => {
    it("returns dequeued values in FIFO (first in, first out) style", () => {
      const queue = new Queue(10);
      queue.enqueue("value 1");
      queue.enqueue("value 2");

      const value1 = queue.dequeue();
      const value2 = queue.dequeue();

      expect(value1).to.equal("value 1");
      expect(value2).to.equal("value 2");
    });

    describe("that is not full", () => {
      it("becomes longer when non null value enqueued", () => {
        const queue = new Queue(10);

        queue.enqueue("anything");
        queue.enqueue("something more");

        expect(queue.length()).to.equal(2);
      });

      it("becomes full when enqueued up to capacity", () => {
        const queue = new Queue(1);

        queue.enqueue("anything");

        expect(queue.length()).to.equal(queue.getCapacity());
      });
    });

    describe("that is full", () => {
      it("ignores further enqueued values", () => {
        const queue = new Queue(1);
        queue.enqueue("anything");
        expect(queue.length()).to.equal(queue.getCapacity());

        queue.enqueue("something above limit");

        expect(queue.length()).to.equal(queue.getCapacity());
      });

      it("becomes non full when dequeued", () => {
        const queue = new Queue(1);
        queue.enqueue("anything");
        expect(queue.length()).to.equal(queue.getCapacity());

        queue.dequeue();

        expect(queue.length()).to.be.lessThan(queue.getCapacity());
      });
    });
  });
});
