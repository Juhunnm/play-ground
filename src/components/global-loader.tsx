import logo from "../assets/logo.png";
export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-screen w-[100vw] flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce flex-col items-center justify-center gap-4">
        <img src={logo} alt="ask-your-duck 로그" className="w-50" />
        <div className=" text-xl font-bold">loading</div>
      </div>
    </div>
  );
}
