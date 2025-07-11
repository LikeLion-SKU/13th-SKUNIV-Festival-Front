import { Outlet, ScrollRestoration } from "react-router";
import styled from "@emotion/styled";

export default function ServiceLayout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
      <ScrollRestoration />
    </>
  );
}

const Container = styled.div`
  padding: 20px;
`;
