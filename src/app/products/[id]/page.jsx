
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getProduct = async (id) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch product");
    }

    return res.json();
  } catch (error) {
    throw error;
  }
};

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const singleProduct = await getProduct(id);

  if (!singleProduct || !singleProduct.id) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          ← Back to products
        </Link>

        <div className="grid gap-10 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
          {/* Product Image */}
          <div className="flex min-h-80 items-center justify-center rounded-xl bg-gray-50 p-8">
            <Image
              src={singleProduct.image}
              alt={singleProduct.title}
              width={450}
              height={450}
              priority
              className="h-80 w-full object-contain"
            />
          </div>

          {/* Product Information */}
          <div className="flex flex-col justify-center">
            <span className="mb-4 w-fit rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-medium capitalize text-indigo-700">
              {singleProduct.category}
            </span>

            <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl">
              {singleProduct.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xl text-amber-400">★</span>

              <span className="font-semibold text-gray-800">
                {singleProduct.rating.rate}
              </span>

              <span className="text-sm text-gray-500">
                ({singleProduct.rating.count} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="mt-6 text-3xl font-bold text-indigo-600">
              ${singleProduct.price.toFixed(2)}
            </p>

            {/* Description */}
            <div className="mt-6">
              <h2 className="mb-2 text-lg font-semibold text-gray-900">
                Description
              </h2>

              <p className="text-base leading-7 text-gray-600">
                {singleProduct.description}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700"
              >
                Add to Cart
              </button>

              <button
                type="button"
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Buy Now
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Product ID: {singleProduct.id}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
