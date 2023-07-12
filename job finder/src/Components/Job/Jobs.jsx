import React from "react";
import { useSelector } from "react-redux";
import { BiTimeFive } from 'react-icons/bi';

const Jobs = ({jobs, setJobsActive, loggedIn}) => {
    return (
        <div>
            <div className='jobContainer flex gap-10 justify-center flex-wrap items py-10'>
                {
                    jobs.map((item, index) => {
                        return (
                            <div key={index} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                                <span className="flex justify-between items-center gap-4 ">
                                    <h1 className="text-[13px] font-semibold text-textColor group-hover:text-white">{item && item.title}</h1>
                                    <span className='flex items-center text-[#ccc] gap-1'>
                                        {item && item.remote ? 'remote': 'on-site'}
                                    </span>
                                </span>
                                <h6 className='text-[#ccc]'>{item && item.location}</h6>
                                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                    {item && item.tags}
                                </p>
                                <div className="company flex items-center gap-2">
                                    <span className='text-[14px] py-[1rem] block group-hover:text-white'>{item && item.company_name}</span>
                                </div>
                                {loggedIn ? <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white">Save Job</button> : ''}
                                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] fonts-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white" onClick={() => setJobsActive(item)}>Apply Now</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Jobs;