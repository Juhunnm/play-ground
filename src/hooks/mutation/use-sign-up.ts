import { signUp } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default function useSignUp(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: signUp,
    onError: (error) => {
      if (callback?.onError) callback.onError(error);
    },
    onSuccess: () => {
      if (callback?.onSuccess) callback.onSuccess();
    },
  });
}
