import toast from "react-hot-toast";
// cart
// get CartProducts from local storage
const getAllProductsInCart = () => {
    const cartProducts = localStorage.getItem("cart");
    if (cartProducts) {
        const allProducts = JSON.parse(cartProducts);
        return allProducts;
    } else {
        return [];
    }
}

// add a product to local storage
const addToCart = (product) => {
    const cart = getAllProductsInCart();
    const isExist = cart.find(item => item.product_id == product.product_id);
    if (isExist) {
        return toast.error('Product Already Exists In The Cart!');

    }
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success('Product Added To The Cart!');
}

// remove a product from local storage

// delete the whole cart
const removeCart = () => {
    localStorage.removeItem("cart");
    return [];
}
// favorites
// get CartProducts from local storage
const getAllProductsFavorites = () => {
    const favoriteProducts = localStorage.getItem("favorites");
    if (favoriteProducts) {
        const allProducts = JSON.parse(favoriteProducts);
        return allProducts;
    } else {
        return [];
    }
}

// add a product to local storage
const addToFavorites = (product) => {
    const favorites = getAllProductsFavorites();
    const isExist = favorites.find(item => item.product_id == product.product_id);
    if (!isExist) {
        favorites.push(product);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        toast.success('Product Added To WishList!');
    }

}

// remove a product from local storage


export { addToCart, getAllProductsInCart, addToFavorites, getAllProductsFavorites, removeCart }