
import { useLoaderData } from "react-router-dom";
import Heading from "../components/Heading/Heading";
import ProductDetailsCard from "../components/ProductDetailsCard.jsx/ProductDetailsCard";



const ProductDetails = () => {

    const data = useLoaderData();

    return (
        <div>
            <div>
                <Heading
                    title={"Product Details"}
                    subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
                </Heading>
            </div>
            <div className="-translate-y-80">
                <ProductDetailsCard data={data}></ProductDetailsCard>
            </div>

        </div>
    );
};

export default ProductDetails;