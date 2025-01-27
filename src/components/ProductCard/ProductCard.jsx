import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
    const {product_id, product_image, product_title, price } = product;
    console.log(product_image);
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price: {price}$</p>
                    <div className="card-actions">
                        <Link to={`/product/${product_id}`}><button className="btn  border-2 rounded-3xl border-violet-500">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.object.isRequired,
};
export default ProductCard;