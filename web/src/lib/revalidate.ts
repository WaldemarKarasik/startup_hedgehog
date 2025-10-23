"use server";

import { revalidatePath, revalidateTag, updateTag } from "next/cache";
import { REVALIDATE_TYPES } from "../types";

type RevalidatePath = {
  type: REVALIDATE_TYPES.PATH;
  path: string;
};
type RevalidateTag = {
  type: REVALIDATE_TYPES.TAG;
  tag: string;
};
type RevalidateConfig = RevalidatePath | RevalidateTag;
export const revalidate = async (config: RevalidateConfig) => {
  if (config.type == REVALIDATE_TYPES.PATH) {
    revalidatePath(config.path);
  } else {
    updateTag(config.tag);
  }
  return { success: true };
};
