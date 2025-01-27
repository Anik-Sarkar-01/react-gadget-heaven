import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {

    const { title, author, date, content, featuredImage, tags } = blog;

    const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent = content.substring(0, 300) + "..."; 

    return (
        <div className="card bg-base-100 rounded-3xl shadow-xl max-w-4xl mx-auto flex-col">
            <figure className="h-[300px]">
                <img
                    className="w-full"
                    src={featuredImage}
                    alt="Movie" />
            </figure>
            <div className="card-body w-full">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center gap-3">
                    <button className="btn btn-xs btn-outline btn-info">{date}</button>
                    <p className="font-semibold">Author : {author}</p>
                </div>
                <p className="text-justify">{isExpanded ? content : truncatedContent}</p>
                <button className="btn border-purple-500 rounded-3xl" onClick={() => setIsExpanded(!isExpanded)}>
                    {isExpanded ? "Show Less" : "Read Full Article"}
                </button>
                <div className="card-actions flex gap-5">
                    {
                        tags.map((tag, idx) => <Link className="text-xs text-blue-500" key={idx}>#{tag}</Link>)
                    }
                </div>
            </div>
        </div>
    );
};
BlogCard.propTypes = {
    blog: PropTypes.object.isRequired,
};
export default BlogCard;