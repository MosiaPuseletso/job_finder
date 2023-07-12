import * as api from '../Api';

export const applyJob = (applyJob) => async (dispatch) => {
    try{
        const { data } = await api.applyJob(applyJob);

        dispatch({ type: 'CREATE', payload: data});
    }catch (error){
        console.log(error.message);
    }
}