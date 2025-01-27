import BlogCards from "../components/BlogCards/BlogCards";
import useTitle from "../hooks/useTitle";


const Blogs = () => {
    useTitle("Blogs");
    return (
        <div>
            <BlogCards></BlogCards>
        </div>
    );
};

export default Blogs;