"use client";
import { useForm } from "react-hook-form";
import { formField } from "@/lib/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { type userForm } from "@/types/forms"; // Assuming you import FormData correctly
import { createPost } from "@/actions/actions";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userForm>({
    resolver: yupResolver(formField),
  });

  const onSubmit = async (data: userForm) => {
    try {
      const response = await createPost(data);
      if (response?.success) {
        toast.success(response.message || "Post created successfully!");
        reset();
      } else {
        throw new Error(response?.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error("Failed to create post!");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto my-10 flex max-w-[400px] flex-col gap-2"
    >
      {/* Title input */}
      <input
        type="text"
        placeholder="Title for new post"
        className="h-10 rounded border px-3"
        {...register("text")}
      />
      {errors.text && (
        <p className="mt-1 text-sm text-red-600">{errors.text.message}</p>
      )}

      {/* Body content input */}
      <textarea
        placeholder="Body content for new post"
        className="rounded border px-3 py-2"
        rows={6}
        {...register("textarea")}
      />
      {errors.textarea && (
        <p className="mt-1 text-sm text-red-600">{errors.textarea.message}</p>
      )}

      {/* Submit button */}
      <button
        type="submit"
        className="h-10 rounded bg-blue-500 px-5 text-white"
      >
        Submit
      </button>
    </form>
  );
}
