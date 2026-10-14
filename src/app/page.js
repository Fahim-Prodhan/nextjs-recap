
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { OurContext } from "@/context/ContextProvider";
import Image from "next/image";
import Link from "next/link";

const getProducts = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json();
  } catch (error) {
    throw new Error(error)
  }
}

export default async function Home() {

  const products = await getProducts();
  console.log(products);

  return (
    <>
      <Header />
      {/* products */}
      <div>
        <div className="my-12">
          <p className="text-center text-5xl font-bold">Feature Products</p>
        </div>

        <div className="grid grid-cols-4 gap-12 px-12">
          {
            products.slice(0, 8).map(product => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>

      </div>
      <div className="flex justify-center my-12">
        <Link href={'/products'}><button className="btn btn-primary btn-outline w-24">See More</button></Link>
      </div>
    </>
  );
}
