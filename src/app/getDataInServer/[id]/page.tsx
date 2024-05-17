import Link from "next/link";
import { PostType } from "../page";

async function getData<PostType>(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("Error loading post");
  }
  return res.json();
}

export default async function PostDetails({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const post: PostType = await getData(params.id);

  return (
    <>
      <div className=" container mx-auto p-4 m-2">
        <div className=" mb-5" key={post.id}>
          <h1 className="text-3xl font-bold  mb-4">Post Details</h1>
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="mb-2">
              <strong>UserId:</strong> {post.userId}
            </p>
            <p>{post.body}</p>
          </div>
        </div>
        <Link
          href="/getDataInServer"
          className=" px-4 py-2 rounded-xl bg-blue-500"
        >
          BACK
        </Link>
      </div>
    </>
  );
}
