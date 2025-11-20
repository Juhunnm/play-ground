import { forgetPasswordForEmail } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default function useForgetPasswordForEmail(
  callback?: UseMutationCallback,
) {
  return useMutation({
    mutationFn: forgetPasswordForEmail,
    onSuccess: () => {
      if (callback?.onSuccess) callback.onSuccess();
    },
    onError: (error) => {
      if (callback?.onError) callback.onError(error);
    },
  });
}
