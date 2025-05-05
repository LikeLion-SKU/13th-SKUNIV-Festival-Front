import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <main>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </main>
  );
}
