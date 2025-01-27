import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {

    return (
        <div className="border rounded-3xl border-gray-400 flex flex-col items-start mb-5 max-w-fit max-h-fit gap-5 p-10">
            {
                categories.map(category => (
                    <NavLink
                        to={`category/${category.category}`}
                        key={category.id} 
                        className={({isActive}) => `${isActive?'btn bg-violet-500 font-bold' : 'bg-white'}text-gray-500 btn rounded-3xl w-36`}>
                        {category.category}
                    </NavLink>
                ))
            }
        </div>
    );
};

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
};

export default Categories;