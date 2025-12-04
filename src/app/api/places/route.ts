import { NextResponse } from "next/server";

import { places } from "@/lib/data";

export const GET = () => {
  return NextResponse.json(places);
};
