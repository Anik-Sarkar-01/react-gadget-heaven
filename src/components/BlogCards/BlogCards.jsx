import { useLoaderData } from "react-router-dom";
import Heading from "../Heading/Heading";
import { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
const BlogCards = () => {
    const data = useLoaderData();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(data);
    }, [data])

    return (
        <div>
            <Heading title={"Digital Insights"} subtitle={"Insights from the Digital Frontier"}></Heading>
            <div className="grid gap-5 my-10">
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogCards;