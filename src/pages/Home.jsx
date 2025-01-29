import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import useTitle from "../hooks/useTitle";
import { useRef } from "react";

const Home = () => {
    useTitle("Home");
    const categories = useLoaderData();

    const productsRef = useRef(null);
    

    const scrollToProducts = () => {
        if (productsRef.current) {
            productsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="max-w-[1450px] mx-auto">
            <Banner scrollToProducts={scrollToProducts}></Banner>
            <h2 ref={productsRef} id="products" className="text-4xl font-bold text-center ">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-8 my-10">
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;