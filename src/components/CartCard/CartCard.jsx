import PropTypes from "prop-types";
const CartCard = ({product, handleRemoveFromCart}) => {

    const { product_id, product_image, product_title, description, price} = product;

    return (
        <div className="flex gap-5 items-center bg-gray-100 p-5 rounded-3xl relative">
            <div>
                <img className="max-w-sm h-[200px] rounded-2xl shadow-lg" src={product_image} alt="" />
            </div>
            <div className="space-y-3">
                <h2 className="font-bold text-xl">{product_title}</h2>
                <p className="text-gray-400">{description}</p>
                <p className="font-semibold text-lg">Price:{price}</p>
                <div onClick={() => handleRemoveFromCart(product_id)} className="absolute top-25 right-10">
                    <button className="btn btn-circle border-red-500">X</button>
                </div>
            </div>
        </div>
    );
};

CartCard.propTypes = {
    product: PropTypes.object.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired,
};

export default CartCard;