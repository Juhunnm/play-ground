import { useSession } from "@/store/sesstion";
import { Navigate, Outlet } from "react-router";

export default function GuestOnlylayout() {
  const session = useSession();
  if (session) return <Navigate to={"/"} replace={true} />;
  return <Outlet />;
}
