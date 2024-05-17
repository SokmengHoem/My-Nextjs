import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export const genderateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <>
    <Link href="/products">Back to product</Link>
    <h1>Details about product {params.productId} </h1>
    </>
  );
}
