"use client";

// import Button from "../../../components/ui/Button";
import { schema } from "@/lib/validation";
import { type FormData } from "@/types/forms";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    toast.success("Sign-up successful!");
    if (!data) {
      throw new Error();
    }
    reset();
  };
  return (
    // <div>
    //   <Button variant="destructive" size="lg" className="my-2 w-auto">
    //     Black Button
    //   </Button>
    //   <Button variant="outline" size="lg">
    //     Outline Button
    //   </Button>
    //   <Button variant="destructive" size="icon">
    //     ❌
    //   </Button>
    // </div>
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md"
      >
        <h2 className="mb-4 text-center text-xl font-bold text-gray-800">
          Sign Up
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {`${errors.email.message}`}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            {...register("username")}
            type="text"
            id="username"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {`${errors.username.message}`}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {`${errors.password.message}`}
            </p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirm-password"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            {...register("confirm_password")}
            type="password"
            id="confirm-password"
            className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Confirm your password"
          />
          {errors.confirm_password && (
            <p className="mt-1 text-sm text-red-600">
              {`${errors.confirm_password.message}`}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-500 py-2 font-medium text-white transition duration-300 hover:bg-blue-600 disabled:bg-gray-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Page;
