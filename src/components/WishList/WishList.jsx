import { useState, useEffect, useContext } from "react";
import WishCard from "../WishCard/WishCard";
import ProductContext from "../../Contexts/ProductContext";
import { addToCart, getAllProductsFavorites, removeProductFromFavorites } from "../../utils";

const WishList = () => {

    const data = useContext(ProductContext);
    const [wishList, setWishList] = useState([]);

    useEffect(() => {
        const productsInFavorites = getAllProductsFavorites();
        const productsInFavoritesId = productsInFavorites.map(product => product.product_id);
        const favoritesItems = data.filter(item => productsInFavoritesId.includes(item.product_id));
        setWishList(favoritesItems);
    }, [data])

    const handleRemoveFromFavorite = (id) => {
        removeProductFromFavorites(id);
        const productsInFavorites = getAllProductsFavorites();
        setWishList(productsInFavorites)
    }

    const handleAddToCart = (product) => {
        addToCart(product);
        removeProductFromFavorites(product.product_id);
        const productsInFavorites = getAllProductsFavorites();
        setWishList(productsInFavorites);
    }

    return (
        <div>
            <h2 className="font-bold text-xl">Wish List</h2>
            <div className="flex flex-col gap-5 mt-5">
                {
                    wishList.map(product => <WishCard handleRemoveFromFavorite={handleRemoveFromFavorite} handleAddToCart={handleAddToCart} key={product.product_id} product={product}></WishCard>)
                }
            </div>
        </div>
    );
};

export default WishList;