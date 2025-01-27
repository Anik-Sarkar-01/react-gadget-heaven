import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const ProductCards = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        if (!category || category === "All Product") {
            setProducts(data);
        }
        else{
            const filteredProducts = [...data].filter(product => product.category === category);
            setProducts(filteredProducts);
        }
    }, [category, data])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                products.map(product => <ProductCard key={product.product_id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default ProductCards;