import { Link, NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { useContext } from "react";
import { authContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
    const {user, createLogOut}=useContext(authContext);
    // console.log(user)
    const handleLogOut=()=>{
        createLogOut()
        .then(result => {
            console.log(result);
            console.log('Log out successfully');
        })
    .catch(error => {
            console.log(error);
        })
    }
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex justify-center items-center gap-4">
                    <FaCircleUser />

                    {
                        user? <button onClick={handleLogOut} to="/login" className="btn">Log out</button>: <Link to="/login" className="btn">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;