import { Outlet, ScrollRestoration } from "react-router";
import styled from "@emotion/styled";

export default function ServiceLayout() {
  return (
    <main>
      <Container>
        <Outlet />
      </Container>
      <ScrollRestoration />
    </main>
  );
}

const Container = styled.div`
  padding: 20px;
`;
