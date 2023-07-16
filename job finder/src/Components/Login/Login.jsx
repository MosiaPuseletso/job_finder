import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { authUser } from "../../Api";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const { status } = useSelector((state) => state.user);

    useEffect(() => {
        if(status){
            navigate('/');
        }
    }, [status]);

    const loginUser = () => {
        dispatch(authUser(loginData));
    }

    return (
        <div className="group group/item singleJob p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Email" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='password' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Password" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            </div>
            <button className="mb-[10px] border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" onClick={loginUser}>Login</button>
        </div>
    );
};

export default Login;