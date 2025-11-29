import type { Database } from "./database.types";

export type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];

export type UseMutationCallback = {
  onError?: (error: Error) => void;
  onSuccess?: () => void;
};
