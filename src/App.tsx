import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./routes/home";
import RootLayout from "./shared/layouts/root-layout";
import About from "./routes/about";
import Tabling from "./routes/tabling";
import BoothInfo from "./routes/booth";
import BoothDetail from "./routes/boothdetail";
import TablingAdmin from "./routes/tablingadmin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Home,
  },
  {
    Component: RootLayout,
    children: [
      { path: "about", Component: About },
      { path: "tabling", Component: Tabling },
      { path: "tabling/admin", Component: TablingAdmin },
      { path: "booth", Component: BoothInfo },
      { path: "booth/:boothId", Component: BoothDetail },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
