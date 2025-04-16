import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./shared/layouts/root-layout.tsx", [
    index("./routes/home/index.tsx"),
    route("about", "./routes/about/index.tsx")
  ]),
];
