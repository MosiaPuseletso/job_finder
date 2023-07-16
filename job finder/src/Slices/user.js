import { createSlice } from '@reduxjs/toolkit';
import { createUser, authUser } from '../Api';

const userSlice = createSlice({
    name: 'user',
    initialState: { data: [], status: false },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.data = {
                fullname: action.payload.data.fullname,
                email: action.payload.data.email
            };
            state.status = true;
        }).addCase(createUser.pending, (state) => {
            state.status = false;
        }).addCase(createUser.rejected, (state) => {
            state.status = false;
        }).addCase(authUser.fulfilled, (state, action) => {
            state.data = {
                fullname: action.payload.data.fullname,
                email: action.payload.data.email
            };
            state.status = action.payload.data.status;
        }).addCase(authUser.pending, (state) => {
            state.status = false;
        }).addCase(authUser.rejected, (state) => {
            state.status = false;
        });
    }
});

export default userSlice;