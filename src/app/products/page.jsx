
import FilterComponent from '@/components/FilterComponent';
import ProductCard from '@/components/ProductCard';

const getProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        return res.json();
    } catch (error) {
        throw new Error(error)
    }
}


const ProductsPage = async () => {

    const products = await getProducts();
    console.log(products);

    return (
        <div>
            <div className="my-12">
                <p className="text-center text-5xl font-bold">Feature Products</p>
            </div>
            <FilterComponent products={products}/>
             
        </div>
    );
};

export default ProductsPage;