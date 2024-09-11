import {test, expect } from "@playwright/test";
import { CircularQueue } from "../../../src/Beginner/Queues/15b.mjs";

test.describe('CircularQueue @15b', () => {

    test('should correctly enqueue and peek elements in the circular queue', async () => {
      const trafficQueue = new CircularQueue(5);

      trafficQueue.enqueue({ vehicleCount: 30, avgSpeed: 60 });
      trafficQueue.enqueue({ vehicleCount: 25, avgSpeed: 55 });
      trafficQueue.enqueue({ vehicleCount: 40, avgSpeed: 50 });
      trafficQueue.enqueue({ vehicleCount: 20, avgSpeed: 65 });
      trafficQueue.enqueue({ vehicleCount: 35, avgSpeed: 70 });

      expect(trafficQueue.peek()).toEqual({ vehicleCount: 30, avgSpeed: 60 });

      trafficQueue.enqueue({ vehicleCount: 45, avgSpeed: 45 }); // Overwrites the oldest data
      expect(trafficQueue.peek()).toEqual({ vehicleCount: 25, avgSpeed: 55 });

      trafficQueue.dequeue();
      expect(trafficQueue.peek()).toEqual({ vehicleCount: 40, avgSpeed: 50 });

      expect(trafficQueue.isFull()).toBe(false);
      expect(trafficQueue.isEmpty()).toBe(false);
    });

    test('should handle negative scenarios like dequeueing from empty queue', async () => {
      const trafficQueue = new CircularQueue(5);

      trafficQueue.enqueue({ vehicleCount: 30, avgSpeed: 60 });
      trafficQueue.dequeue();

      expect(trafficQueue.peek()).toBeUndefined();

      trafficQueue.dequeue(); // Edge case: dequeueing from an empty queue
      expect(trafficQueue.isEmpty()).toBe(true);

      expect(() => trafficQueue.dequeue()).not.toThrow(); // Should handle gracefully

      trafficQueue.enqueue({ vehicleCount: 45, avgSpeed: 45 });
      trafficQueue.enqueue({ vehicleCount: 50, avgSpeed: 55 });
      expect(trafficQueue.isEmpty()).toBe(false);
    });

    test('should correctly handle edge cases with queue overwriting and full status', async () => {
      const trafficQueue = new CircularQueue(3);

      trafficQueue.enqueue({ vehicleCount: 10, avgSpeed: 50 });
      trafficQueue.enqueue({ vehicleCount: 20, avgSpeed: 60 });
      trafficQueue.enqueue({ vehicleCount: 30, avgSpeed: 70 });

      expect(trafficQueue.isFull()).toBe(true);
      expect(trafficQueue.peek()).toEqual({ vehicleCount: 10, avgSpeed: 50 });

      trafficQueue.enqueue({ vehicleCount: 40, avgSpeed: 80 }); // Should overwrite
      expect(trafficQueue.peek()).toEqual({ vehicleCount: 20, avgSpeed: 60 });

      trafficQueue.dequeue();
      expect(trafficQueue.peek()).toEqual({ vehicleCount: 30, avgSpeed: 70 });

      trafficQueue.enqueue({ vehicleCount: 50, avgSpeed: 90 });
      expect(trafficQueue.isFull()).toBe(true);
      expect(trafficQueue.peek()).toEqual({ vehicleCount: 30, avgSpeed: 70 });
    });

  });
