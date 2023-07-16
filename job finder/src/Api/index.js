import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:5000/';

export const fetchJobs = createAsyncThunk('fetch-jobs', async () => {
    try {
        const { data } = await axios.get(URL + 'jobs');
        return data;
    } catch (error) {
        return error;
    }
});

export const createUser = createAsyncThunk('create-user', async (newUser) => {
    try {
        const response = await axios.post(URL + "user/register", newUser);
        return response;
    } catch (error) {
        return error;
    }
});

export const authUser = createAsyncThunk('auth-user', async (loginData) => {
    try {
        const response = await axios.post(URL + "user/login", loginData);
        return response;
    } catch (error) {
        return error;
    }
});

export const saveJob = createAsyncThunk('save-job', async (saveJobInfo) => {
    try {
        const response = await axios.post(URL + 'saveJob', saveJobInfo);
        return response;
    } catch (error) {
        return error;
    }
});

export const fetchSavedJobs = createAsyncThunk('fetch-savedJobs', async(email) => {
    try {
        const response = await axios.post(URL + 'saveJob/getJobs', email);
        return response;
    } catch (error) {
        return error;
    }
});

export const applyJobs = createAsyncThunk('apply-job', async(job) => {
    try {
        const response = await axios.post(URL + 'applyJob', job);
        return response;
    } catch (error) {
        return error;
    }
});