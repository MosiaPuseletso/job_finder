import React from "react";
import { useSelector } from "react-redux";

const SavedJob = ({saveJob, setSavedJob}) => {
    const savedJob = useSelector((state) => state.savedJob);
    setSavedJob(savedJob);
    let jobs;

    if (saveJob.length > 0) {
        jobs = savedJob[0].map((item, index) => {
            let job = JSON.parse(item.job);
            return (
                <div key={index} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                    <span className="flex justify-between items-center gap-4 ">
                        <h1 className="text-[13px] font-semibold text-textColor group-hover:text-white">{job.title}</h1>
                        <span className='flex items-center text-[#ccc] gap-1'>
                            {job.remote ? 'remote' : 'on-site'}
                        </span>
                    </span>
                    <h6 className='text-[#ccc]'>{job.location}</h6>
                    <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                        {job.tags}
                    </p>
                    <div className="company flex items-center gap-2">
                        <span className='text-[14px] py-[1rem] block group-hover:text-white'>{job.company_name}</span>
                    </div>
                </div>
            )
        });
    }

    return (
        <div className='jobContainer flex gap-10 justify-center flex-wrap items py-10'>
            { jobs }
        </div>
    );
}

export default SavedJob;