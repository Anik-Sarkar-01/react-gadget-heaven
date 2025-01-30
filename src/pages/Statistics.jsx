import { useLoaderData } from "react-router-dom";
import Chart from "../components/Chart/Chart";
import Heading from "../components/Heading/Heading";
import useTitle from "../hooks/useTitle";

const Statistics = () => {
    useTitle("Statistics");
    const data = useLoaderData();
    return (
        <div>
            <Heading
                title={"Statistics"}
                subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
            </Heading>
            <h2 className="text-2xl pt-10 font-bold ms-5">Statistics</h2>
            <div className="h-[400px] max-w-dvw bg-gray-100 mt-5 mb-20 mx-5 rounded-xl">
                <Chart data={data}></Chart>
            </div>
        </div>
    );
};

export default Statistics;