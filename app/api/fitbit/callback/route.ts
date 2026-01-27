import { NextResponse } from "next/server";
import { saveTokens } from "@/lib/fitbitTokens";

export async function GET(req: Request) {
  try {
    const clientId = process.env.FITBIT_CLIENT_ID!;
    const clientSecret = process.env.FITBIT_CLIENT_SECRET!;
    const redirectUri = process.env.FITBIT_REDIRECT_URI!;

    const { searchParams } = new URL(req.url);
    const code = searchParams.get("code");

    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("redirect_uri", redirectUri);
    params.append("code", code);

    const tokenResponse = await fetch("https://api.fitbit.com/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const tokenData = await tokenResponse.json();
    console.log("TOKEN RESPONSE:", tokenData);

    if (!tokenResponse.ok) {
      return NextResponse.json(
        { error: "Token exchange failed", details: tokenData },
        { status: 400 }
      );
    }

    saveTokens(tokenData);
    console.log("Tokens saved to file.");

    return NextResponse.redirect("http://localhost:3000/fitbit?success=1");
  } catch (err) {
    return NextResponse.json({ error: "Callback crashed", details: String(err) });
  }
}
