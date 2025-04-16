import { Outlet } from "react-router";
import RegisterSW from "../register-sw";

export default function RootLayout() {
  return (
    <div>
      root layout
      <RegisterSW />
      <Outlet />
    </div>
  );
}
