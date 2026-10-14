
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            {/* Product Image */}
            <div className="relative flex h-64 items-center justify-center bg-gray-50 p-6">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={250}
                    height={250}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
                    {product.category}
                </span>
            </div>

            {/* Product Details */}
            <div className="p-5">
                <h2 className="line-clamp-2 min-h-12 text-lg font-semibold text-gray-800">
                    {product.title}
                </h2>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                    {product.description}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                    <span className="text-lg text-amber-400">★</span>
                    <span className="text-sm font-semibold text-gray-700">
                        {product.rating.rate}
                    </span>
                    <span className="text-sm text-gray-400">
                        ({product.rating.count} reviews)
                    </span>
                </div>

                {/* Price and Button */}
                <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-2xl font-bold text-indigo-600">
                        ${product.price.toFixed(2)}
                    </p>

                    <Link href={`/products/${product.id}`}>
                        <button
                            type="button"
                            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                        >
                            View Product
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
