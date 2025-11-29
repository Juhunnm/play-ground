import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png";
import { SunIcon, User } from "lucide-react";
export default function GlobalLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="h-15 border-b">
        <div className="m-auto flex h-full w-full max-w-175 justify-between px-4">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              className="h-10"
              src={logo}
              alt="open-circle의 로고 사람들이 원을 만드는 모양"
            />
            <div className="font-bold">open circle</div>
          </Link>
          <div className="flex items-center gap-5">
            <div className="hover:bg-muted cursor-pointer rounded-full">
              <SunIcon />
            </div>
            <div className="hover:bg-muted cursor-pointer rounded-full">
              <User />
            </div>
          </div>
        </div>
      </header>
      <main className="m-auto h-full w-full max-w-175 flex-1 border-x px-4 py-6">
        <Outlet />
      </main>
      <footer className="text-muted-foreground border-t py-10 text-center">
        @juhunnm
      </footer>
    </div>
  );
}
