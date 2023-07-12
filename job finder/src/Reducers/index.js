import { combineReducers } from "redux";
import jobs from './jobs';
import savedJob from './saveJob';

export default combineReducers({
    jobs,
    savedJob,
});