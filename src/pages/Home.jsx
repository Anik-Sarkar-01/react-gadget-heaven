import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import useTitle from "../hooks/useTitle";

const Home = () => {
    useTitle("Home");
    const categories = useLoaderData();
    return (
        <div className="max-w-[1450px] mx-auto">
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center ">Explore Cutting-Edge Gadgets</h2>
            <div className="flex gap-8 my-10">
                <Categories categories={categories}></Categories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;