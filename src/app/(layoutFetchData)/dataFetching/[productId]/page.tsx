"use client"
import { useEffect, useState } from "react";
import { ProductType } from "../page";
import Image from "next/image";
import Link from "next/link";

export default function ProductCartDetail({params}:{
    params:{
        productId:number
    }
}) {
    const [data, setData] = useState<ProductType>();

  const fetchData = async (id: number) => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      if (!res.ok) {
        throw new Error("Error fetching products");
      }
      const newData = await res.json();
      setData(newData);
    } catch (error) {
      throw new Error("Error fetching products");
    }
  };

  useEffect(() => {
    fetchData(params.productId);
  }, [params.productId]);

  return (
    data && (
      <div>
        <h1>{data.title}</h1>
        <Image src={data.image} alt={data.title} width={400} height={350}/>
        <p>${data.category}</p>
        <p>${data.price}</p>
        <p>{data.description}</p>
        <Link href="/dataFetching" className=" text-blue-500 underline">BACK</Link>
      </div>
    )
  )
}