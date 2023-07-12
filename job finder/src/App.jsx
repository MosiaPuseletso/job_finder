import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Jobs from "./Components/Job/Jobs";
import Apply from './Components/Apply/Apply';
import Register from "./Components/Register/Register";
import SavedJob from "./Components/SavedJob/SavedJob";
import { useDispatch, useSelector } from "react-redux";

import { getJobs } from './Actions/jobs.js';

const App = () => {
  const dispatch = useDispatch();
  const [callDispatch, setCallDispatch] = useState(true);
  const jobs = useSelector((state) => state.jobs);
  const [jobsActive, setJobsActive] = useState(null);
  const [loginActive, setLoginActive] = useState(false);
  const [jobsOff, setJobsOff] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const [job, setJob] = useState({ data: jobs });
  const [saveJob, setSaveJob] = useState({ data: [] });
  useEffect(() => {
    if (callDispatch) {
      dispatch(getJobs());
      setCallDispatch(false);
    }
    
    setJob({ data: jobs });
  }, [jobs]);

  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar jobsOff={setJobsOff} loggedIn={loggedIn} jobsActive={setJobsActive} saveJob={saveJob} setSaveJobs={setSaveJob} />
      <Search jobs={job.data} setJob={setJob} savedJob={saveJob} setSavedJob={setSaveJob} />
      {jobsActive === null && jobsOff == false ? <Jobs jobs={job.data} setJobsActive={setJobsActive} loggedIn={loggedIn} /> : (jobsActive !== null && jobsOff == false) ? <Apply job={jobsActive} /> : ''}
      {loginActive == false && jobsOff == true && loggedIn == false ? <Register logged={setLoggedIn} /> : (loginActive == true && jobsOff == false && loggedIn == false) ? "fucken" : ''}
      {loggedIn == true && jobsOff == true ? <SavedJob saveJob={saveJob} setSavedJob={setSaveJob} /> : ''}
    </div>
  );
}

export default App;