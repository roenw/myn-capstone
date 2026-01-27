import { NextResponse } from "next/server";
import { loadTokens } from "@/lib/fitbitTokens";

export async function GET() {
  const tokens = loadTokens();

  if (!tokens?.access_token) {
    return NextResponse.json(
      { error: "Not connected to Fitbit" },
      { status: 400 }
    );
  }

  const date = new Date().toISOString().split("T")[0];

  const res = await fetch(
    `https://api.fitbit.com/1/user/-/activities/date/${date}.json`,
    {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    }
  );

  const json = await res.json();
  return NextResponse.json(json);
}
