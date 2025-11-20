import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSignOut from "@/hooks/mutation/use-sign-out";
import useUpdatePassword from "@/hooks/mutation/use-update-password";
import { generateErrorMessage } from "@/lib/error";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate: singOut, isPending: isSignOut } = useSignOut({
    onSuccess: () => {
      toast.success("로그아웃 되었습니다!", {
        position: "top-center",
      });
      navigate("/sign-in");
    },
    onError: (error) => {
      const message = generateErrorMessage(error);
      toast.error(message, {
        position: "top-center",
      });
    },
  });
  const { mutate: updatePassword, isPending: isUpdatePasswordPeding } =
    useUpdatePassword({
      onError: (error) => {
        const message = generateErrorMessage(error);
        toast.error(message, {
          position: "top-center",
        });
        setPassword("");
      },
      onSuccess: () => {
        toast.success("비밀번호가 성공적으로 변경되었습니다.", {
          position: "top-center",
        });
        setPassword("");
        singOut();
      },
    });

  const handleUpdatePasswordClick = () => {
    if (password.trim() === "") return;
    updatePassword(password);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1 text-center">
        <div className="font-blod text-xl">비밀번호 재설정 하기</div>
        <div className="text-muted-foreground">
          새로운 비밀번호를 입력하세요
        </div>
      </div>
      <Input
        disabled={isUpdatePasswordPeding}
        type="password"
        className="py-6"
        placeholder="new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        disabled={isUpdatePasswordPeding}
        onClick={handleUpdatePasswordClick}
      >
        비밀번호 재설정
      </Button>
    </div>
  );
}
