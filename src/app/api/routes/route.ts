import { NextResponse } from "next/server";

import { routes } from "@/lib/data";

export const GET = () => {
  return NextResponse.json(routes);
};
