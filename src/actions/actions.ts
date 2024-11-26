"use server";

import { CreatePostResponse, userForm } from "@/types/forms";

export async function createPost(
  formData: userForm,
): Promise<CreatePostResponse> {
  const { text, textarea } = formData;

  console.log("Received Data:", { text, textarea });

  return {
    success: true,
    message: "Post created successfully",
  };
}
