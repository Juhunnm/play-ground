import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignUp from "@/hooks/mutation/use-sign-up";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: signUp, isPending: isSignUpPeding } = useSignUp({
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
    onSuccess: () => {
      toast.success("회원가입 성공", {
        position: "top-center",
      });
      //   setEmail("");
      //   setPassword("");
    },
  });

  const handleSignUpClick = () => {
    if (email.trim() === "" || password.trim() === "") return;
    signUp({ email, password });
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="font-blod text-center text-xl">회원가입</div>
      <div className="flex flex-col gap-2">
        <Input
          disabled={isSignUpPeding}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-6"
          type="email"
          placeholder="example@abc.com"
        />
        <Input
          disabled={isSignUpPeding}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-6"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <Button
          disabled={isSignUpPeding}
          onClick={handleSignUpClick}
          className="w-full"
        >
          회원가입
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <Link className="text-muted-foreground hover:underline" to={"/sign-in"}>
          이미 계정이 있다면? 로그인
        </Link>
      </div>
    </div>
  );
}
