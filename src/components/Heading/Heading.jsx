import PropTypes from "prop-types";
const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center text-white space-y-4 min-h-80 pt-10 bg-purple-500">
            <h2 className="text-3xl font-bold ">{title}</h2>
            <p className="max-w-3xl mx-auto">{subtitle}</p>
        </div>
    );
};

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};
export default Heading;