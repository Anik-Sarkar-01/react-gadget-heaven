import { Link, NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar bg-purple-500">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-purple-500 rounded-box z-[1] mt-4 w-52 p-3 gap-6 shadow text-white">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="text-xl text-white font-bold">Gadget Heaven</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6 text-white">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link className="bg-white rounded-full p-2"><BsCart3></BsCart3></Link>
                <Link className="bg-white rounded-full p-2"><CiHeart></CiHeart></Link>
            </div>
        </div>
    );
};

export default Navbar;