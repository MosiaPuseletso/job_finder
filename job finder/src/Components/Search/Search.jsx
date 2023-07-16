import React from "react";
import { useDispatch } from 'react-redux';

const Search = ({jobs, updateJobs}) => {
    const dispatch = useDispatch();

    let tempJobs = [...jobs];
    
    const sortJob = () => {
        switch(document.getElementById('relevance').value){
            case 'Latest':
                tempJobs.sort((a, b) => {
                    return parseFloat(a.created_at) - parseFloat(b.created_at);
                });
                dispatch(updateJobs(tempJobs));
                // setJob({data: jobs});
                // console.log(savedJob);
                break;
            case 'Remote':
                tempJobs.sort((a, b) => {
                    return (a.remote === b.remote) ? 0 : a.remote ? -1 : 1;
                });
                dispatch(updateJobs(tempJobs));
                // setJob({data: jobs});
                // savedJob[0].sort((a, b) => {
                //     let aJob = JSON.parse(a.job);
                //     let bJob = JSON.parse(b.job);

                //     return (aJob.remote === bJob.remote) ? 0 : aJob.remote ? -1 : 1;
                // });
                // setSavedJob(savedJob);
                break;
            case 'On-Site':
                tempJobs.sort((a, b) => {
                    return (a.remote === b.remote) ? 0 : b.remote ? -1 : 1;
                });
                dispatch(updateJobs(tempJobs));
                // setJob({data: jobs});
                // savedJob[0].sort((a, b) => {
                //     let aJob = JSON.parse(a.job);
                //     let bJob = JSON.parse(b.job);

                //     return (aJob.remote === bJob.remote) ? 0 : bJob.remote ? -1 : 1;
                // });
                // setSavedJob(savedJob);
                break;
        }
    }
    return (
        <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
            <div className="secDiv flex items-center gap-10 justify-center">
                <div className="singleSearch flex items-center gap-2">
                    <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>
                    <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1" onClick={sortJob}>
                        <option value="Latest">Latest</option>
                        <option value="Remote">Remote</option>
                        <option value="On-Site">On-Site</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Search;