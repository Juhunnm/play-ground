import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignInWithPassword from "@/hooks/mutation/use-sign-in-with-password";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signInWithPassword, isPending: isSignInWithPasswordPending } =
    useSignInWithPassword({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
        setPassword("");
      },
      onSuccess: () => {
        toast.success("로그인 성공", {
          position: "top-center",
        });
      },
    });
  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "" || password.trim() === "") return;
    signInWithPassword({ email, password });
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="font-blod text-center text-xl">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <Button onClick={handleSignInWithPasswordClick} className="w-full">
          로그인
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Link className="text-muted-foreground" to={"/sign-up"}>
          계정이 없으시다면? 회원가입
        </Link>
        <Link className="text-muted-foreground" to={"/forget-password"}>
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
}
