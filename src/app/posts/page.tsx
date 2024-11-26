import PostsClient from "../../../components/PostsClient";
import { Suspense } from "react";
import { LoadingSpinner } from "./components/Spinner";
const page = () => {
  return (
    <main className="px-5 pt-16 text-center">
      <h1 className="mb-5 text-4xl font-bold md:text-5xl">All posts</h1>

      <Suspense fallback={<LoadingSpinner />}>
        <PostsClient />
      </Suspense>
    </main>
  );
};

export default page;
