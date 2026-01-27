import { NextResponse } from "next/server";

export async function GET() {
  const accessToken = process.env.FITBIT_TEST_ACCESS_TOKEN;

  const url =
    "https://api.fitbit.com/1/user/-/activities/heart/date/today/1d.json";

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return NextResponse.json(data);
}
