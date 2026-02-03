import { NextResponse } from 'next/server';
import { calculateBookingQuote } from '@/lib/pricing';

export async function POST(request: Request) {
  const body = await request.json();
  const { checkIn, checkOut, basePrice, rules } = body;

  try {
    const quote = calculateBookingQuote(
      new Date(checkIn),
      new Date(checkOut),
      Number(basePrice),
      rules ?? []
    );
    return NextResponse.json(quote);
  } catch (error) {
    return NextResponse.json({ message: (error as Error).message }, { status: 400 });
  }
}
