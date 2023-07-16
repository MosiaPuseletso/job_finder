import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Search from "../Search/Search";
import { fetchSavedJobs } from "../../Api";
import savedJobsSlice from "../../Slices/savedJobs";

const SavedJob = () => {
    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.user)
    const savedJobs = useSelector((state) => state.savedJobs);
    const { updateSavedJobs } = savedJobsSlice.actions;
    
    useEffect(() => {
        dispatch(fetchSavedJobs({ email: data.email }));
    }, [dispatch]);

    return (
        <div>
            <Search jobs={savedJobs.data} updateJobs={updateSavedJobs} />
            <div className='jobContainer flex gap-10 justify-center flex-wrap items py-10'>
                {savedJobs.data.map((item, index) => {
                    return (
                        <div key={index} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                            <span className="flex justify-between items-center gap-4 ">
                                <h1 className="text-[13px] font-semibold text-textColor group-hover:text-white">{item.title}</h1>
                                <span className='flex items-center text-[#ccc] gap-1'>
                                    {item.remote ? 'remote' : 'on-site'}
                                </span>
                            </span>
                            <h6 className='text-[#ccc]'>{item.location}</h6>
                            <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                                {item.tags}
                            </p>
                            <div className="company flex items-center gap-2">
                                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{item.company_name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default SavedJob;