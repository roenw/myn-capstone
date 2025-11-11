import { auth0 } from "../../lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();

  if (!session) {
    return (
      <main>
        <h1>You are not signed in.</h1>
        <a href="/auth/login?screen_hint=signup">Sign up</a> <br />
        <a href="/auth/login">Log in</a>
      </main>
    );
  }

  return (
    <main>
      <h1>Welcome, {session.user.name}!</h1>
      <p>Your email is: {session.user.email}</p>
      <a href="/auth/logout">Log out</a>
    </main>
  );
}