const page = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`, {
    next: { revalidate: 3600 },
    cache: "force-cache",
  });
  const post = await res.json();
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="mb-7 text-5xl font-semibold">{post.title}</h1>
      <p className="mx-auto max-w-[700px]">{post.body}</p>
    </main>
  );
};

export default page;