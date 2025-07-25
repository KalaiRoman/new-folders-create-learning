import { Login, Register } from "../pages/Pages";

const RoutingPaths = [
  {
    id: 1,
    name: "Login",
    path: "/",
    index: true,
    sidebar: true,
    component: Login,
    iconActive: "",
    iconInactive: "",
  },
  {
    id: 2,
    name: "Register",
    path: "/register",
    index: false,
    sidebar: true,
    component: Register,
    iconActive: "",
    iconInactive: "",
  },
];

export default RoutingPaths;
