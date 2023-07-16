import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Jobs from "./Components/Job/Jobs";
import Apply from './Components/Apply/Apply';
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import SavedJob from "./Components/SavedJob/SavedJob";
import { useDispatch, useSelector } from "react-redux";

import { fetchJobs } from "./Api";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="w-[85%] m-auto bg-white">
        <Navbar />
        <Routes>
          <Route path='/' element={<Jobs />} />
          <Route path='/jobs' element={<SavedJob />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/apply' element={<Apply />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;