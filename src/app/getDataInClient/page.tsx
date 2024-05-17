"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export interface CommentType {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export default function GetDataInClient () {
  const [data, setData] = useState<CommentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      if (!res.ok) {
        throw new Error("Error fetching comments");
      }
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
       <div className=" text-center text-2xl font-semibold">Comments</div>
      {data.map((item) => (
        <div  key={item.id} className=" flex flex-col items-center gap-3 mt-5">
          <div className=" bg-slate-200 w-[50%] px-6 py-3 rounded-lg relative ">
            <h1>{item.name}</h1>
            <p>{item.email}</p>
            <Link href={`/getDataInClient/${item.id}`} className=" bg-blue-500 px-4 py-2 rounded-xl absolute top-4 right-3">See Detail</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
