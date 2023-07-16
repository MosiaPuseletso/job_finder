import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App.jsx';
import './index.css';

import jobsSlice from './Slices/jobs.js';
import userSlice from './Slices/user.js';
import savedJobsSlice from './Slices/savedJobs.js';
import applyJobSlice from './Slices/applyJob.js';

const store = configureStore({
  reducer: {
    jobs: jobsSlice.reducer,
    user: userSlice.reducer,
    savedJobs: savedJobsSlice.reducer,
    applyJob: applyJobSlice.reducer
  },
  middleware: [thunk]
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
