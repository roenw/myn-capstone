import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.FITBIT_CLIENT_ID!;
  const clientSecret = process.env.FITBIT_CLIENT_SECRET!;
  const redirectUri = process.env.FITBIT_REDIRECT_URI!;

  const storedRefreshToken = (globalThis as any).fitbitRefreshToken;
 
  if (!storedRefreshToken) {
    return NextResponse.json(
      { error: "No refresh token stored" },
      { status: 400 }
    );
  }

  const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", storedRefreshToken);
  params.append("redirect_uri", redirectUri);

  const res = await fetch("https://api.fitbit.com/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${basicAuth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  const data = await res.json();

  if (data.refresh_token) {
    globalThis.fitbitRefreshToken = data.refresh_token;  // save new refresh token
  }

  return NextResponse.json(data);
}
