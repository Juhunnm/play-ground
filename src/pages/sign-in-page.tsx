import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignInWithPassword from "@/hooks/mutation/use-sign-in-with-password";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { useSignInWithOauth } from "@/hooks/mutation/use-sign-in-with-oauth";

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
  const { mutate: signInWithOAuth, isPending: isSignInWithOauthPeding } =
    useSignInWithOauth({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
      },
    });
  const handleSignInWithPasswordClick = () => {
    if (email.trim() === "" || password.trim() === "") return;
    signInWithPassword({ email, password });
  };

  const handleSignInWithKakao = () => {
    signInWithOAuth("kakao");
  };

  const isPending = isSignInWithPasswordPending || isSignInWithOauthPeding;
  return (
    <div className="flex flex-col gap-5">
      <div className="font-blod text-center text-xl">로그인</div>
      <div className="flex flex-col gap-2">
        <Input
          disabled={isPending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Button
          disabled={isPending}
          onClick={handleSignInWithPasswordClick}
          className="w-full cursor-pointer"
        >
          로그인
        </Button>
        <Button
          disabled={isPending}
          onClick={handleSignInWithKakao}
          className="text-#191919 w-full cursor-pointer border border-transparent bg-[#FEE500] hover:bg-[#F5D700] hover:text-[#191919] active:bg-[#E5C600]"
        >
          카카오로 시작하기
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          계정이 없으시다면? 회원가입
        </Link>
        <Link
          className="text-muted-foreground hover:underline"
          to={"/forget-password"}
        >
          비밀번호를 잊으셨나요?
        </Link>
      </div>
    </div>
  );
}
