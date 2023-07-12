import React from "react";

const Navbar = ({jobsOff, loggedIn, jobsActive}) => {
    return (
        <div className='navBar flex justify-between items-center p-[3rem]'>
            <div className='logoDiv'>
                <h1 className='logo text-[25px] text-blueColor cursor-pointer' onClick={() => jobsOff(false)}><strong>Job</strong>Finder</h1>
            </div>
            <div className='menu flex gap-8'>
                { loggedIn ? <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => jobsOff(true)}>Saved Jobs</li> : ''}
                { !loggedIn ? <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => jobsOff(true)}>Login</li> : ''}
                { !loggedIn ? <li className="menuList text-[#6f6f6f] hover:text-blueColor" onClick={() => jobsOff(true)}>Register</li> : ''}
            </div>
        </div>
    );
}

export default Navbar;