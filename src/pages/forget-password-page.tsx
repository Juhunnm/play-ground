import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useForgetPasswordForEmail from "@/hooks/mutation/use-forget-password-for-email";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { toast } from "sonner";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const { mutate: resetPasswordForEmail, isPending: isForgetPasswordPending } =
    useForgetPasswordForEmail({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
      },
      onSuccess: () => {
        toast.info(
          "비밀번호 재설정 링크를 이메일로 보냈습니다(해당 계정이 존재하는 경우).",
          {
            position: "top-center",
          },
        );
      },
    });

  const handleSendEmail = () => {
    if (email.trim() === "") return;
    resetPasswordForEmail(email);
    setEmail("");
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-center">
        <div className="text-xl font-bold">비밀번호를 잊으셨나요?</div>
        <div className="text-muted-foreground">
          이메일로 재설정 링크를 보내드립니다.
        </div>
      </div>
      <Input
        disabled={isForgetPasswordPending}
        type="email"
        className="py-6"
        placeholder="example@abc.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        disabled={isForgetPasswordPending}
        onClick={handleSendEmail}
        className="w-full"
      >
        이메일 보내기
      </Button>
    </div>
  );
}
