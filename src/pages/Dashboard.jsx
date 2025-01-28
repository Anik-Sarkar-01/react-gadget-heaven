import { useLoaderData, useNavigate } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { getAllProductsFavorites, getAllProductsInCart, removeCart } from "../utils";
import CartAndWishlistCard from "../components/CartAndWishlistCard/CartAndWishlistCard";
import { GoSortDesc } from "react-icons/go";
import groupImage from "../assets/Group.png";
import useTitle from "../hooks/useTitle";


const Dashboard = () => {
    useTitle("Dashboard");
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [purchaseAmount, setPurchaseAmount] = useState(0);
    const [purchaseButtonStatus, setPurchaseButtonStatus] = useState(true);
    const data = useLoaderData();


    useEffect(() => {
        const productsInCart = getAllProductsInCart();
        const productsInCartId = productsInCart.map(product => product.product_id);
        const cartItems = data.filter(item => productsInCartId.includes(item.product_id));
        setCart(cartItems);

        const total = cartItems.reduce((acc, curr) => acc + curr.price, 0);
        setTotalCost(total);
        setPurchaseAmount(total);

        if(total === 0){
            setPurchaseButtonStatus(true);
        }
        else{
            setPurchaseButtonStatus(false);
        }
    }, [data])

    useEffect(() => {
        const productsInFavorites = getAllProductsFavorites();
        const productsInFavoritesId = productsInFavorites.map(product => product.product_id);
        const favoritesItems = data.filter(item => productsInFavoritesId.includes(item.product_id));
        setWishList(favoritesItems);
    }, [data])

    const handleSort = () => {
        const sortedByPrice = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedByPrice);
    }


    

    const handlePurchase = () => {
        document.getElementById('my_modal_5').showModal();
        const remove = removeCart();
        setCart(remove);
        setTotalCost(0);
    }

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/');
    }

    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col justify-center items-center space-y-3">
                    <img src={groupImage} alt="" />
                    <h3 className="font-bold text-4xl">Payment Successful</h3>
                    <div className="divider"></div>
                    <p className="py-4">Thanks for purchasing!</p>
                    <p className="">Price: {purchaseAmount}</p>
                    <div className="">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={() => handleNavigate()} className="btn w-40">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
            <Heading
                title={"Dashboard"}
                subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
            </Heading>

            <div className="flex gap-5 justify-center -translate-y-30">

                <Tabs className="w-7xl">
                    <TabList className="flex gap-5 mb-40 justify-center">
                        <Tab >Cart</Tab>
                        <Tab >Wish List</Tab>
                    </TabList>

                    <TabPanel>
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
                                cart.map(product => <CartAndWishlistCard key={product.product_id} product={product}></CartAndWishlistCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className="font-bold text-xl">Wish List</h2>
                        <div className="flex flex-col gap-5 mt-5">
                            {
                                wishList.map(product => <CartAndWishlistCard key={product.product_id} product={product}></CartAndWishlistCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>

        </div>
    );
};

export default Dashboard;