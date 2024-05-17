"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
export default function GetDataInClient() {
  const [data, setData] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(4);
  const fetchData = async (count: number) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=${count}`
      );
      if (!res.ok) {
        throw new Error("Error fetching products");
      }
      const newData = await res.json();
      console.log(newData);
      setData(newData);
    } catch (error) {
      throw new Error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchData(count);
  }, [count]);

  const handleButtonClick = () => {
    setCount((prevCount) => prevCount + 4);
  };

  return (
    <div>
      <div className="text-center text-2xl font-semibold">Products</div>
      <div className=" w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <Link href={`/dataFetching/${item.id}`}>
          <div key={item.id} className="bg-slate-50 p-4 rounded shadow h-[500px]">
            <div className="flex justify-center h-[60%]">
              <Image
                src={item.image}
                alt={item.title}
                width={230}
                height={230}
              />
            </div>
            <div className="mt-4 h-[60%]">
              <div className="font-bold text-lg">{item.title}</div>
              <div className="text-gray-700">${item.price}</div>
              <button className=" px-4 py-2 rounded-xl bg-green-500 text-white font-medium">Add Cart</button>
            </div>
          </div>
          </Link>
        ))}
      </div>
      <div className=" text-center">
        <button
          onClick={handleButtonClick}
          className="bg-blue-500 px-4 py-2 font-medium text-white rounded-xl my-5"
        >
          See more
        </button>
      </div>
    </div>
  );
}
