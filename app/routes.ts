import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("./routes/home/index.tsx"),

  layout("./shared/layouts/root-layout.tsx", [route("about", "./routes/about/index.tsx")]),
] satisfies RouteConfig;
