import axios from 'axios';

const URL = 'http://localhost:5000/';

export const fetchJobs = () => axios.get(URL + 'jobs');
export const applyJob = (applyJob) => axios.post(URL + 'applyJob', applyJob);
export const createUser = (newUser) => axios.post(URL + "user/create", newUser);
export const authUser = (loginData) => axios.post(URL + "user/signin", loginData);
export const saveJob = (saveJob) => axios.post(URL + 'saveJob', saveJob);
export const fetchSavedJobs = (email) => axios.post(URL + 'saveJob/getJobs', email);