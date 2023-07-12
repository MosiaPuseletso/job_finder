import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createUser } from '../../Actions/user';
import { getSavedJobs } from '../../Actions/saveJob.js';

const Register = ({logged}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const registerUser = (e) => {
        dispatch(createUser(userData));
        dispatch(getSavedJobs({userEmail: 'mos'}));
        logged(true);
    }

    return (
        <div className="group group/item singleJob p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Email" onChange={(e) => setUserData({ ...userData, email: e.target.value})}/>
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='password' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Password" onChange={(e) => setUserData({ ...userData, password: e.target.value})}/>
            </div>
            <button className="mb-[10px] border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" onClick={registerUser}>Register</button>
        </div>
    );
}

export default Register;