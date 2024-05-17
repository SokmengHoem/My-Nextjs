"use client";
import { use, useEffect, useState } from "react";
import { CommentType } from "../page";

export default function CommentDetail({
  params,
}: {
  params: {
    id: number;
  };
}) {
   
    const [post, setPost] = useState<CommentType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
      if (!params.id) return;
  
      const fetchData = async () => {
        try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.id}`);
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          const data: CommentType = await res.json();
          setPost(data);
        } catch (error) {
          setError((error as Error).message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [params.id]);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!post) return <p>No data found</p>;
    
   return (
    <>
      <div key={post.id}>
        <h1> <strong>Name:</strong> {post.name}</h1>
        <p className=" text-blue-500"><strong>Gmail:</strong>{post.email}</p>
        <p>{post.body}</p>
      </div>
    </>
  );
}
