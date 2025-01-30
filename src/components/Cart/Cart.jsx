import { useContext, useEffect, useState } from "react";
import { GoSortDesc } from "react-icons/go";
import CartCard from "../CartCard/CartCard";
import { useNavigate } from "react-router-dom";
import groupImage from "../../assets/Group.png"
import ProductContext from "../../Contexts/ProductContext";
import { getAllProductsInCart, removeCart, removeProductFromCart } from "../../utils";



const Cart = () => {
    const data = useContext(ProductContext);
    const [cart, setCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [purchaseButtonStatus, setPurchaseButtonStatus] = useState(true);
    const [purchaseAmount, setPurchaseAmount] = useState(0);


    useEffect(() => {
        const productsInCart = getAllProductsInCart();
        const productsInCartId = productsInCart.map(product => product.product_id);
        const cartItems = data.filter(item => productsInCartId.includes(item.product_id));
        setCart(cartItems);

        const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
        setTotalCost(total);
        setPurchaseAmount(total);

        if (total === 0) {
            setPurchaseButtonStatus(true);
        }
        else {
            setPurchaseButtonStatus(false);
        }
    }, [data])


    const handleSort = () => {
        const sortedByPrice = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedByPrice);
    }

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
        const remove = removeCart();
        setCart(remove);
        setTotalCost(0);
    }

    const handleRemoveFromCart = (id) => {
        removeProductFromCart(id);
        const productsInCart = getAllProductsInCart();
        setCart(productsInCart);
        const total = productsInCart.reduce((acc, curr) => acc + curr.price, 0);
        setTotalCost(total);
        setPurchaseAmount(total);

        if (total === 0) {
            setPurchaseButtonStatus(true);
        }
        else {
            setPurchaseButtonStatus(false);
        }
    }

    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col justify-center items-center space-y-3">
                    <img src={groupImage} alt="" />
                    <h3 className="font-bold text-4xl">Payment Successful</h3>
                    <div className="divider"></div>
                    <p className="py-4">Thanks for purchasing!</p>
                    <p className="">Price: {purchaseAmount}$</p>
                    <div className="">
                        <form method="dialog">

                            <button onClick={() => handleNavigate()} className="btn w-40">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <div className="flex items-center justify-between">
                <h2 className="font-bold text-xl">Cart</h2>
                <div className="flex items-center gap-3">
                    <h2 className="font-bold text-xl">Total Cost: {totalCost} $</h2>
                    <button onClick={() => handleSort()} className="btn border-2 border-purple-500 rounded-3xl text-lg text-purple-500">Sort by Price <GoSortDesc></GoSortDesc></button>
                    <button disabled={purchaseButtonStatus} onClick={() => handlePurchase()} className="btn bg-purple-500 rounded-3xl text-white text-lg">Purchase</button>
                </div>
            </div>
            <div className="flex flex-col gap-5 mt-5">
                {
                    cart.map(product => <CartCard handleRemoveFromCart={handleRemoveFromCart} key={product.product_id} product={product}></CartCard>)
                }
            </div>

        </div >
    );
};

export default Cart;