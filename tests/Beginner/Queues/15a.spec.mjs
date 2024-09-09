import {test, expect} from '@playwright/test';
import { ticketQueue } from '../../../src/Beginner/Queues/15a.mjs';

test.describe('Ticket Queue System - @15a', () => {

    test('should correctly add and process tickets in FIFO order', async () => {
      const supportSystem = ticketQueue();

      supportSystem.addTicket("Order issue - John");
      supportSystem.addTicket("Payment failure - Sarah");
      supportSystem.addTicket("Return request - Alex");

      expect(supportSystem.viewQueue()).toEqual([
        "Order issue - John",
        "Payment failure - Sarah",
        "Return request - Alex"
      ]);

      expect(supportSystem.processTicket()).toBe("Order issue - John");
      expect(supportSystem.viewQueue()).toEqual([
        "Payment failure - Sarah",
        "Return request - Alex"
      ]);

      supportSystem.addTicket("Account issue - Brian");
      expect(supportSystem.viewQueue()).toEqual([
        "Payment failure - Sarah",
        "Return request - Alex",
        "Account issue - Brian"
      ]);
    });

    test('should handle processing from an empty queue gracefully', async () => {
      const supportSystem = ticketQueue();

      expect(supportSystem.processTicket()).toBe("No tickets to process");

      supportSystem.addTicket("Order issue - John");
      expect(supportSystem.processTicket()).toBe("Order issue - John");

      expect(supportSystem.processTicket()).toBe("No tickets to process");

      expect(supportSystem.viewQueue()).toEqual([]);
    });

    test('should correctly handle edge cases with sequential processing', async () => {
      const supportSystem = ticketQueue();

      supportSystem.addTicket("Order issue - John");
      supportSystem.addTicket("Payment failure - Sarah");

      expect(supportSystem.viewQueue()).toEqual([
        "Order issue - John",
        "Payment failure - Sarah"
      ]);

      expect(supportSystem.processTicket()).toBe("Order issue - John");
      expect(supportSystem.viewQueue()).toEqual([
        "Payment failure - Sarah"
      ]);

      expect(supportSystem.processTicket()).toBe("Payment failure - Sarah");
      expect(supportSystem.viewQueue()).toEqual([]);

      supportSystem.addTicket("Return request - Alex");
      supportSystem.addTicket("Account issue - Brian");

      expect(supportSystem.viewQueue()).toEqual([
        "Return request - Alex",
        "Account issue - Brian"
      ]);

      expect(supportSystem.processTicket()).toBe("Return request - Alex");
      expect(supportSystem.processTicket()).toBe("Account issue - Brian");
      expect(supportSystem.viewQueue()).toEqual([]);
    });

  });
