import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Parser from 'html-react-parser';
import { BiTimeFive } from 'react-icons/bi';

import { applyJob } from '../../Actions/applyJob';
import { saveJob } from '../../Actions/saveJob';

const Apply = ({job}) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);

    const [jobData, setJobData] = useState({
        fullname: '',
        email: '',
        title: job.title,
        location: job.location,
        company: job.company_name,
        country: '',
        cv: '',
    });

    const applyForJob = (e) => {
        dispatch(applyJob(jobData));
    }

    const saveTheJob = (e) => {
        dispatch(saveJob({userEmail: user || 'mos', job: JSON.stringify(job)}));
    }

    return (
        <div className="group group/item singleJob p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className="flex justify-between items-center gap-4 ">
                <h1 className="text-[13px] font-semibold text-textColor group-hover:text-white">{job.title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{job.remote ? 'remote' : 'on-site'}
                </span>
            </span>
            <h6 className='text-[#ccc]'>{job.location}</h6>
            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {job.tags}
            </p>
            <div className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {Parser(job.description)}
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Full Name" onChange={(e) => setJobData({ ...jobData, fullname: e.target.value})} />
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Email" onChange={(e) => setJobData({ ...jobData, email: e.target.value})}/>
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='text' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Enter Country" onChange={(e) => setJobData({ ...jobData, country: e.target.value})}/>
            </div>
            <div className="firstDiv flex justify-between items-center rounded-[8px] mb-[10px] gap-[10px] bg-greyIsh p-5 shadow-lg shadow-greyIsh-700">
                <input type='file' className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder="Choose CV" onChange={(e) => setJobData({ ...jobData, cv: e.target.value})}/>
            </div>
            <button className="mb-[10px] border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" onClick={saveTheJob}>Save Job</button>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" onClick={applyForJob}>Apply Now</button>
        </div>
    );
}

export default Apply;