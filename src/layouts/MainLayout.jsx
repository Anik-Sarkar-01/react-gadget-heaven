import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="sora-font">
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