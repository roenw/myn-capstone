import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.FITBIT_TEST_ACCESS_TOKEN!; // or store user's token

  const today = new Date().toISOString().split("T")[0];

  const response = await fetch(
    `https://api.fitbit.com/1/user/-/activities/date/${today}.json`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
