"use client";
import { LoadingSpinner } from "@/app/posts/components/Spinner";
import { useFetch } from "@/hooks/useFetch";
import { APIResponse } from "@/types/postsClientTypes";

import Link from "next/link";

const PostsClient = () => {
  const { data, error, loading } = useFetch<APIResponse>(
    "https://dummyjson.com/posts?limit=10",
  );

  if (!loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {data?.posts.map((post) => (
        <li key={post.id} className="mb-3">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsClient;
