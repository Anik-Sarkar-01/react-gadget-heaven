import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from "react";
import { getAllProductsFavorites, getAllProductsInCart } from "../utils";
import CartAndWishlistCard from "../components/CartAndWishlistCard/CartAndWishlistCard";
import { GoSortDesc } from "react-icons/go";


const Dashboard = () => {
    const [cart, setCart] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);

    const data = useLoaderData();


    useEffect(() => {
        const productsInCart = getAllProductsInCart();
        const productsInCartId = productsInCart.map(product => product.product_id);
        const cartItems = data.filter(item => productsInCartId.includes(item.product_id));
        setCart(cartItems);

        const total = cartItems.reduce((acc, curr) => acc + curr.price , 0) ;
        setTotalCost(total);
    }, [data])

    useEffect(() => {
        const productsInFavorites = getAllProductsFavorites();
        const productsInFavoritesId = productsInFavorites.map(product => product.product_id);
        const favoritesItems = data.filter(item => productsInFavoritesId.includes(item.product_id));
        setWishList(favoritesItems);
    }, [data])

    const handleSort = () => {
        const sortedByPrice = [...cart].sort((a,b) => b.price - a.price);
        setCart(sortedByPrice);
    }

    return (
        <div>
            <Heading
                title={"Dashboard"}
                subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
            </Heading>

            <div className="flex gap-5 justify-center -translate-y-30">

                <Tabs className="w-7xl">
                    <TabList className="flex gap-5 mb-40 justify-center">
                        <Tab>Cart</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-xl">Cart</h2>
                            <div className="flex items-center gap-3">
                                <h2 className="font-bold text-xl">Total Cost: {totalCost} $</h2>
                                <button onClick={() => handleSort()} className="btn border-2 border-purple-500 rounded-3xl text-lg text-purple-500">Sort by Price <GoSortDesc></GoSortDesc></button>
                                <button className="btn bg-purple-500 rounded-3xl text-white text-lg">Purchase</button>
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