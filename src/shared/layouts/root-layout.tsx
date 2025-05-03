import { Outlet, ScrollRestoration } from "react-router";
import Header from "../components/Header";
import styled from "@emotion/styled";

export default function RootLayout() {
  return (
    <main>
      <Header />
      <Container>
        <Outlet />
        <ScrollRestoration />
      </Container>
    </main>
  );
}

const Container = styled.div`
  padding: 20px;
`;
