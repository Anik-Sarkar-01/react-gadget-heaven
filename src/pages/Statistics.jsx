import Heading from "../components/Heading/Heading";
import useTitle from "../hooks/useTitle";
const Statistics = () => {
    useTitle("Statistics");
    return (
        <div>
            <Heading
                title={"Statistics"}
                subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}>
            </Heading>
            

        </div>
    );
};

export default Statistics;