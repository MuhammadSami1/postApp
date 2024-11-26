"use server";

import { CreatePostResponse, userForm } from "@/types/forms";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(
  formData: userForm,
): Promise<CreatePostResponse> {
  const { text, textarea } = formData;

  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }
  console.log("Received Data:", { text, textarea });

  return {
    success: true,
    message: "Post created successfully",
  };
}
