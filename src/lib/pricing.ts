import { differenceInCalendarDays, eachDayOfInterval } from 'date-fns';

export type PricingRule = {
  date: string;
  price: number;
  minNights?: number;
  stopSell?: boolean;
  availableUnits?: number;
};

export type BookingQuote = {
  nights: number;
  baseTotal: number;
  fees: number;
  tax: number;
  total: number;
  priceBreakdown: Array<{ date: string; price: number }>;
};

export function calculateBookingQuote(
  checkIn: Date,
  checkOut: Date,
  basePrice: number,
  rules: PricingRule[],
  feePercent = 0.12,
  taxPercent = 0.04
): BookingQuote {
  const nights = differenceInCalendarDays(checkOut, checkIn);
  if (nights <= 0) {
    throw new Error('Невалидный диапазон дат');
  }

  const ruleMap = new Map(rules.map((rule) => [rule.date, rule]));
  const days = eachDayOfInterval({ start: checkIn, end: new Date(checkOut.getTime() - 1) });
  const priceBreakdown = days.map((day) => {
    const dateKey = day.toISOString().slice(0, 10);
    const rule = ruleMap.get(dateKey);
    if (rule?.stopSell) {
      throw new Error(`Дата недоступна: ${dateKey}`);
    }
    return {
      date: dateKey,
      price: rule?.price ?? basePrice
    };
  });

  const baseTotal = priceBreakdown.reduce((sum, item) => sum + item.price, 0);
  const fees = Math.round(baseTotal * feePercent);
  const tax = Math.round(baseTotal * taxPercent);
  const total = baseTotal + fees + tax;

  return { nights, baseTotal, fees, tax, total, priceBreakdown };
}

export function validateMinNights(checkIn: Date, checkOut: Date, rules: PricingRule[]) {
  const nights = differenceInCalendarDays(checkOut, checkIn);
  const ruleMap = new Map(rules.map((rule) => [rule.date, rule]));
  const minNightRule = ruleMap.get(checkIn.toISOString().slice(0, 10));
  const minNights = minNightRule?.minNights ?? 1;
  if (nights < minNights) {
    throw new Error(`Минимум ночей: ${minNights}`);
  }
}
