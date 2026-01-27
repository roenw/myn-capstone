import { NextResponse } from "next/server";

export function GET() {
  const clientId = process.env.FITBIT_CLIENT_ID!;
  const redirectUri = process.env.FITBIT_REDIRECT_URI!;
  const scopes = ["activity", "heartrate", "sleep", "profile"].join(" ");

  const authUrl = `https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=activity%20heartrate%20sleep%20profile&prompt=login%20consent`;


  return NextResponse.redirect(authUrl);
}
