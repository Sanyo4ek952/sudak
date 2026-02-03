import { describe, expect, it } from 'vitest';
import { calculateBookingQuote } from './pricing';

describe('calculateBookingQuote', () => {
  it('returns totals with rules', () => {
    const quote = calculateBookingQuote(
      new Date('2025-06-01'),
      new Date('2025-06-04'),
      5000,
      [
        { date: '2025-06-02', price: 6500 },
        { date: '2025-06-03', price: 6000 }
      ],
      0.1,
      0.05
    );

    expect(quote.nights).toBe(3);
    expect(quote.baseTotal).toBe(17500);
    expect(quote.total).toBe(17500 + 1750 + 875);
  });
});
