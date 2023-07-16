import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Parser from 'html-react-parser';
import { BiTimeFive } from 'react-icons/bi';

import { applyJobs } from '../../Api';

const Apply = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const applyJob = useSelector((state) => state.applyJob);

    const [jobData, setJobData] = useState({
        fullname: user.data.fullname,
        email: user.data.email,
        title: applyJob.data.title,
        location: applyJob.data.location,
        company: applyJob.data.company_name,
        country: '',
        cv: {},
    });

    //const [file, setFile] = useState(); 

    const saveFile = (e) => {
        const reader = new FileReader();
        const formData = new FormData();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            formData.append('File', readerEvent.target.result);
            setJobData({...jobData, cv: Object.fromEntries(formData.entries('File'))});
        }
        
    }

    const applyForJob = () => {
        dispatch(applyJobs(jobData));
        navigate('/');
    }

    return (
        <div className="group group/item singleJob p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className="flex justify-between items-center gap-4 ">
                <h1 className="text-[13px] font-semibold text-textColor group-hover:text-white">{applyJob.data.title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{applyJob.data.remote ? 'remote' : 'on-site'}
                </span>
            </span>
            <h6 className='text-[#ccc]'>{applyJob.data.location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {applyJob.data.tags}
            </p>
            <div className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {Parser(applyJob.data.description)}
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder={user.data.fullname || "Enter Full Name"} onChange={(e) => setJobData({ ...jobData, fullname: e.target.value})} />
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder={user.data.email || "Enter Email"} onChange={(e) => setJobData({ ...jobData, email: e.target.value})}/>
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Country" onChange={(e) => setJobData({ ...jobData, country: e.target.value})}/>
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='file' accept='.pdf' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Choose CV" onChange={saveFile}/>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" onClick={applyForJob}>Apply Now</button>
        </div>
    );
}

export default Apply;