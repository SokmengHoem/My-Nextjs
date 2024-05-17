import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className=" m-4">Welcome home!</h1>
      <Link href="/dataFetching" className=" text-blue-600 bg-slate-200 px-4 py-2 rounded-lg m-4">Go To Fetching Data</Link>
    </>
  );
}
