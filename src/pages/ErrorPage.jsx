import { MdErrorOutline } from "react-icons/md";
import useTitle from "../hooks/useTitle";

const ErrorPage = () => {
    useTitle("Error");
    return (
        <div className="text-2xl font-thn flex flex-col place-items-center justify-center h-lvh ">
            <MdErrorOutline className="text-3xl text-red-500"></MdErrorOutline>
            <h1>Error : 404</h1>
            <p>Oops! Something went wrong. We apologize for the inconvenience.</p>
        </div>
    );
};

export default ErrorPage;