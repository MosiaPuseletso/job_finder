import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const { status } = useSelector((state) => state.user);

    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <NavLink to="/" end>
                    <h1 className='logo text-[25px] text-blueColor cursor-pointer'><strong>Job</strong>Finder</h1>
                </NavLink>
            </div>
            <div className='menu flex gap-8'>
                <NavLink to='/jobs' end>
                    {( status && <li className="menuList text-[#6f6f6f] hover:text-blueColor">Saved Jobs</li> )}
                </NavLink>
                <NavLink to='/login' end>
                    {( !status && <li className="menuList text-[#6f6f6f] hover:text-blueColor">Login</li> )}
                </NavLink>
                <NavLink to='/register'>
                    {( !status && <li className="menuList text-[#6f6f6f] hover:text-blueColor">Register</li> )}
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;