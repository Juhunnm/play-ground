import { Route, Routes } from "react-router";
import GlobalLayout from "./components/layout/global-layout";
import IndexPage from "./pages/index-page";
import SignUpPage from "./pages/sign-up-page";
import SignInPage from "./pages/sign-in-page";
import ForgetPasswordPage from "./pages/forget-password-page";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Route>
    </Routes>
  );
}
