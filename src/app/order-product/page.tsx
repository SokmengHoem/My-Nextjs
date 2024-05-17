"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order")
        router.push("/");
    };
    return(
        <>
            <h1>Order product</h1>
            <button onClick={handleClick} className=" px-4 py-2 bg-red-600 rounded-lg text-white">Place order</button>
        </>
    )
}