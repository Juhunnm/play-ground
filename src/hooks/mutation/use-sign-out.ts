import { signOut } from "@/api/auth";
import type { UseMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export default function useSignOut(callback?: UseMutationCallback) {
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      if (callback?.onSuccess) callback.onSuccess();
    },
    onError: (error) => {
      if (callback?.onError) callback.onError(error);
    },
  });
}
