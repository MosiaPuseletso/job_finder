import * as api from '../Api';

export const getJobs = () => async (dispatch) => {

    try{
        const { data } = await api.fetchJobs();
        dispatch({ type: 'FETCH_ALL', payload: data });
    }catch(error){

    }
}

export const sortJobs = (sortedJobs) => async (dispatch) => {
    dispatch({ type: 'SORT', payload: sortedJobs });
} 