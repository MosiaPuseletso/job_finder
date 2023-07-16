import { createSlice } from "@reduxjs/toolkit";

import { fetchJobs } from "../Api";

const jobsSlice = createSlice({
    name: 'jobs',
    initialState: { data: [], status: ''},
    reducers: {
        updateJobs: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'success';
        }).addCase(fetchJobs.pending, (state) => {
            state.status = "loading";
        }).addCase(fetchJobs.rejected, (state) => {
            state.status = "error";
        });
    }
});

export default jobsSlice;