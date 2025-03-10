import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className="sora-font">
            <Toaster></Toaster>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* dynamic content */}
            <div className="min-h-[calc(100vh-285px)]">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;