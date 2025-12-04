import { NextResponse } from "next/server";

import { accommodations } from "@/lib/data";

export const GET = () => {
  return NextResponse.json(accommodations);
};
