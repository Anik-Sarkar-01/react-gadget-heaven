import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [navColor, setNavColor] = useState("bg-white")
    const location = useLocation();
    

    useEffect(() => {
        if(location.pathname === '/'){
            setNavColor("bg-purple-500");
        }
        else{
            setNavColor("bg-white")
        }
    }, [location.pathname])

    const navItems = <>
        <li><NavLink to='/' className={({isActive}) => `${isActive?'btn bg-gray-500' : 'text-black'} btn font-bold btn-outline border-purple-500 rounded-3xl w-36`} >Home</NavLink></li>
        <li><NavLink to='/statistics' className={({isActive}) => `${isActive?'btn bg-gray-500' : 'text-black'} btn font-bold btn-outline border-purple-500 rounded-3xl w-36`}>Statistics</NavLink></li>
        <li><NavLink to='/dashboard' className={({isActive}) => `${isActive?'btn bg-gray-500' : 'text-black'} btn font-bold btn-outline border-purple-500 rounded-3xl w-36`}>Dashboard</NavLink></li>
        <li><NavLink to='/blogs' className={({isActive}) => `${isActive?'btn bg-gray-500' : 'text-black'} btn font-bold btn-outline border-purple-500 rounded-3xl w-36`}>Blogs</NavLink></li>
    </>
    
    return (
        <div className={`navbar ${navColor} max-w-[1450px] mx-auto mt-8 rounded-t-3xl `}>
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