import { Outlet } from "react-router";
import Header from "../components/Header";
import styled from "@emotion/styled";

export default function RootLayout() {
  return (
<<<<<<< HEAD
    <div>
      <Outlet />
    </div>
=======
    <main>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </main>
>>>>>>> 767724c3fead2ce2216c00d352b813e22550dea8
  );
}

const Container = styled.div`
  padding: 20px;
`;
