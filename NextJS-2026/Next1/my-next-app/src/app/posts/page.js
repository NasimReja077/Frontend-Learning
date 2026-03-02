import Link from "next/link";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  return res.json();
}

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}