import * as api from '../Api';

export const saveJob = (saveJob) => async (dispatch) => {
    try{
        const { data } = await api.saveJob(saveJob);

        dispatch({ type: 'CREATE', payload: data});
    }catch (error){
        console.log(error.message);
    }
}

export const getSavedJobs = (email) => async (dispatch) => {

    try{
        const { data } = await api.fetchSavedJobs(email);
        dispatch({ type: 'FETCH', payload: data });
    }catch(error){
        console.log(error.message);
    }
}