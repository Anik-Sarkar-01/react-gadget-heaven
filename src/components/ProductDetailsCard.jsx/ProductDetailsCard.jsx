import { useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import PropTypes from "prop-types";
import { addToCart, addToFavorites, getAllProductsFavorites} from "../../utils";
import { useEffect, useState } from "react";

const ProductDetailsCard = ({ data }) => {

    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const desiredProduct = data.find(item => item.product_id === parseInt(productId));
        setProduct(desiredProduct);

        const favoriteProducts = getAllProductsFavorites();
        const isExist = favoriteProducts.find(item => item.product_id === desiredProduct.product_id);
        if (isExist) {
            setIsFavorite(true);
        }
    }, [data, productId]);

    const { product_image, product_title, price, availability, description, specification, rating } = product;

    const handleAddToCart = (product) => {
        addToCart(product);
    }

    const handleAddToFavorites = product => {
        addToFavorites(product);
        setIsFavorite(true);
    }

    return (
        <div className="hero max-w-5xl mx-auto my-40 rounded-3xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row gap-10">
                <img
                    src={product_image}
                    className="max-w-lg rounded-lg h-[350px]" />
                <div className="space-y-2">
                    <h1 className="text-3xl font-semibold">{product_title}</h1>
                    <p className="font-semibold">Price: $ {price}</p>
                    <div>
                        {availability && <button className="btn btn-sm btn-outline btn-success rounded-3xl">In Stock</button>}
                        {(!availability) && <button className="btn btn-sm btn-outline btn-error rounded-3xl">Out of Stock</button>}
                    </div>
                    <p className="py-6">{description}</p>
                    <p className="font-semibold">Specification:</p>
                    <ol className="list-decimal ml-4">
                        {
                             specification && specification.map((feature, idx) => <li key={idx}>{feature}</li>)
                        }
                    </ol>
                    <p className="font-semibold">Rating: </p>
                    <div className="flex items-center gap-3">
                        <div className="flex">
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                        </div>
                        <div className="text-xl btn rounded-3xl">
                            {rating}
                        </div>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button onClick={() => handleAddToCart(product)} className="btn bg-violet-500 rounded-3xl px-4 py-3">Add To Cart</button>
                        <button disabled={isFavorite} onClick={() => handleAddToFavorites(product)} className="btn bg-gray-200 text-2xl rounded-full p-2"><CiHeart></CiHeart></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetailsCard.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ProductDetailsCard;