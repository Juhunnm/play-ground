import { signInWithPassword } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default function useSignInWithPassword(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      if (callback?.onError) callback.onError(error);
      console.log(error);
    },
    onSuccess: () => {
      if (callback?.onSuccess) callback.onSuccess();
    },
  });
}
