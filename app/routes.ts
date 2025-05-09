import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    route('/login', '../pages/auth/Login.tsx')
] satisfies RouteConfig;
