import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import useTitle from "../hooks/useTitle";
import ProductContext from "../Contexts/ProductContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cart from "../components/Cart/Cart";
import WishList from "../components/WishList/WishList";

const Dashboard = () => {
    useTitle("Dashboard");
    const data = useLoaderData();

    return (
        <ProductContext.Provider value={data}>
            <div>
                <Heading
                    title={"Dashboard"}
                    subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
                </Heading>

                <div className="flex gap-5 justify-center -translate-y-30">

                    <Tabs className="w-7xl">
                        <TabList className="flex gap-5 mb-40 justify-center">
                            <Tab selectedClassName="bg-white" style={{ borderRadius: '50px' }} className="btn btn-outline border-white w-32">Cart</Tab>
                            <Tab selectedClassName="bg-white" style={{ borderRadius: '50px' }} className="btn btn-outline border-white w-32">Wish List</Tab>
                        </TabList>

                        <TabPanel>
                            <div className="flex flex-col gap-5 mt-5">
                                <Cart></Cart>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="flex flex-col gap-5 mt-5">
                                <WishList></WishList>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </ProductContext.Provider >
    );
};

export default Dashboard;