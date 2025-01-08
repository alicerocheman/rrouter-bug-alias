import { type RouteConfig, index } from "@react-router/dev/routes";
import { safeLog } from "~/utils/safeLog";

const routes = [index("routes/home.tsx")] satisfies RouteConfig;
safeLog(routes);
export default routes;
