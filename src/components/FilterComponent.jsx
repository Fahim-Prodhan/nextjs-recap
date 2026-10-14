
"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FilterComponent = ({ products }) => {
    // const [search, setSearch] = useState("");
    // const [sort, setSort] = useState("default");

    // let filteredProducts = products.filter((product) =>
    //     product.title.toLowerCase().includes(search.toLowerCase())
    // );

    // if (sort === "high-to-low") {
    //     filteredProducts.sort(
    //         (a, b) => b.rating.rate - a.rating.rate
    //     );
    // } else if (sort === "low-to-high") {
    //     filteredProducts.sort(
    //         (a, b) => a.rating.rate - b.rating.rate
    //     );
    // }

    const [search, setSearch] = useState('');
    const [sorting, setSorting] = useState('')

    const filteredProduct = products.filter(product =>
        product?.title?.toLowerCase().includes(search.toLowerCase())
    )

    // if(sorting==='high'){
    //     filteredProduct.sort(
    //         (a,b)=> b.rating.rate - a.rating.rate
    //     )
    // }else if(sorting === 'low'){
    //     filteredProduct.sort(
    //         (a,b)=> a.rating.rate - b.rating.rate
    //     )
    // }


    if (sorting == 'high') {
        console.log(sorting);
        filteredProduct.sort((x, y) => y.rating.rate - x.rating.rate)
    } else if (sorting == 'low') {
        filteredProduct.sort((x, y) => x.rating.rate - y.rating.rate)
    }

    return (
        <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                {/* Search */}
                {/* <div className="w-full sm:flex-1">
                    <label
                        htmlFor="product-search"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        Search Products
                    </label>

                    <input
                        id="product-search"
                        type="search"
                        placeholder="Search by product name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    />
                </div> */}

                {/* Rating Sort */}
                {/* <div className="w-full sm:w-64">
                    <label
                        htmlFor="rating-sort"
                        className="mb-2 block text-sm font-semibold text-gray-700"
                    >
                        Sort by Rating
                    </label>

                    <select
                        id="rating-sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                        className="w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    >
                        <option value="default">Default sorting</option>
                        <option value="high-to-low">
                            Highest rating first
                        </option>
                        <option value="low-to-high">
                            Lowest rating first
                        </option>
                    </select>
                </div> */}


                <div>
                    <input className="input" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" />
                </div>
                <div>
                    <select value={sorting} onChange={(e) => setSorting(e.target.value)}  className="select">
                        <option value="">Sort</option>
                        <option value='high'>High</option>
                        <option value='low'>Low</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-12 px-12">
                {
                    filteredProduct.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default FilterComponent;
