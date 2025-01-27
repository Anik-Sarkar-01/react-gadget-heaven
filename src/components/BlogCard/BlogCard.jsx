import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {

    // "id": 1,
    //   "title": "The Rise of AI in Everyday Life",
    //   "slug": "the-rise-of-ai-in-everyday-life",
    //   "author": "John Doe",
    //   "date": "2024-11-20",
    //   "content": "Artificial intelligence is rapidly transforming our world. From the moment we wake up to the time we go to bed, AI is subtly, and sometimes not so subtly, influencing our daily lives. Smart assistants like Siri and Alexa are becoming commonplace, anticipating our needs and responding to our commands with increasing sophistication. AI-powered recommendation engines curate our entertainment on streaming platforms, suggesting movies, music, and shows that align with our preferences. In the realm of transportation, self-driving cars are inching closer to reality, promising to revolutionize the way we commute and travel. Even the food we eat is increasingly influenced by AI, with algorithms optimizing agricultural practices and predicting consumer demand. As AI continues to evolve at an unprecedented pace, it's clear that it will play an increasingly significant role in shaping our future.",
    //   "featuredImage": "https://via.placeholder.com/600x400",
    //   "excerpt": "Discover how AI is seamlessly integrated into our daily lives, from smart assistants to self-driving cars.",
    // "tags": ["AI", "Technology", "Innovation", "Future"] 

    const { title, author, date, content, featuredImage, tags } = blog;

    const [isExpanded, setIsExpanded] = useState(false);

  const truncatedContent = content.substring(0, 350) + "..."; 

    return (
        <div className="card card-side bg-base-100 rounded-3xl shadow-xl max-w-3xl mx-auto">
            <figure className="w-[50%]">
                <img
                    className="w-full"
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
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