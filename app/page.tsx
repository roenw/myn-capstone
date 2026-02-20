

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth0 } from "./api/auth/[auth0]/auth0";
import './globals.css';


export default function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <a href="/test-dashboard/">Test-Dashboard</a>
    </main>
  );
}