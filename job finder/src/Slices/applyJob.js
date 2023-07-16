import { createSlice } from "@reduxjs/toolkit";

import { applyJobs } from "../Api";

const applyJobSlice = createSlice({
    name: 'applyJob',
    initialState: { data: [], status: '' },
    reducers: {
        setJob: (state, action) => {
            state.data = action.payload;
        },
        clearJob: (state) => {
            state.data = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(applyJobs.fulfilled, (state) => {
            state.data = [];
            state.status = 'success';
        }).addCase(applyJobs.pending, (state) => {
            state.status = "loading";
        }).addCase(applyJobs.rejected, (state) => {
            state.status = "error";
        });
    }
});

export default applyJobSlice;