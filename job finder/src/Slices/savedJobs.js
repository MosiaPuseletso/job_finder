import { createSlice } from "@reduxjs/toolkit";

import { saveJob, fetchSavedJobs } from "../Api";

const savedJobsSlice = createSlice({
    name: 'savedJobs',
    initialState: { data: [], status: '' },
    reducers: {
        updateSavedJobs: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(saveJob.fulfilled, (state, action) => {
            state.data = [action.payload, ...state.data];
            state.status = 'success';
        }).addCase(saveJob.pending, (state) => {
            state.status = "loading";
        }).addCase(saveJob.rejected, (state) => {
            state.status = "error";
        }).addCase(fetchSavedJobs.fulfilled, (state, action) => {
            state.data = [];
            action.payload.data.forEach((item) => {
                state.data.push(item.job);
            });
            state.status = 'success';
        }).addCase(fetchSavedJobs.pending, (state) => {
            state.status = "loading";
        }).addCase(fetchSavedJobs.rejected, (state) => {
            state.status = "error";
        });
    }
});

export default savedJobsSlice;