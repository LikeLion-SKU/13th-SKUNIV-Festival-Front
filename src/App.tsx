import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "./routes/home";
import RootLayout from "./shared/layouts/root-layout";
import Tabling from "./routes/tabling";
import BoothInfo from "./routes/booth";
import BoothDetail from "./routes/boothdetail";
import TablingAdmin from "./routes/tablingadmin";
import LostArticle from "./routes/lostArticle";
import Edit from "./routes/edit";
import Madeby from "./routes/madeby";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ServiceLayout from "./shared/layouts/service-layout";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", index: true, Component: Home },
      { path: "credit", Component: Madeby },
      {
        Component: ServiceLayout,
        children: [
          { path: "tabling", Component: Tabling },
          { path: "tabling/admin/:boothId", Component: TablingAdmin },
          { path: "booth", Component: BoothInfo },
          { path: "booth/:boothId", Component: BoothDetail },
          { path: "lostandfound", Component: LostArticle },
          { path: "edit", Component: Edit },
        ],
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
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
