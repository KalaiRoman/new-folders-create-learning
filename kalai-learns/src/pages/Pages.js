import { lazy } from "react";

const Login = lazy(() => import("../component/auth/Login"));
const Register = lazy(() => import("../component/auth/Register"));

export { Login, Register };
