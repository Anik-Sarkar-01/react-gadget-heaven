import PropTypes from "prop-types";
const CartAndWishlistCard = ({product}) => {
    const {product_image, product_title, description, price} = product;
    return (
        <div className="flex gap-5 items-center bg-gray-100 p-5 rounded-3xl">
            <div>
                <img className="max-w-sm h-[350px] rounded-2xl shadow-lg" src={product_image} alt="" />
            </div>
            <div className="space-y-3">
                <h2 className="font-bold text-xl">{product_title}</h2>
                <p className="text-gray-400">{description}</p>
                <p className="font-semibold text-lg">Price:{price}</p>
            </div>
        </div>
    );
};

CartAndWishlistCard.propTypes = {
    product: PropTypes.object.isRequired,
};

export default CartAndWishlistCard;