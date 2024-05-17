import Link from "next/link";

export interface PostType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function getData() {
  
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data: PostType[] = await getData();
  return (
    <>
      <h1 className=" text-center font-bold text-3xl">Post Data</h1>
      {data.map((item: PostType) => (
        <Link href={`/getDataInServer/${item.id}`}>
          <div className="flex flex-col items-center mt-5 ">
            <div
              key={item.id}
              className=" w-[40%] bg-slate-300 px-5 py-3 rounded-lg"
            >
              <div className=" flex items-center gap-2">
                <p className=" font-semibold">Id:</p> {item.id}
              </div>
              <div className=" flex items-center gap-2">
                <p className=" font-semibold">Title:</p> {item.title}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
