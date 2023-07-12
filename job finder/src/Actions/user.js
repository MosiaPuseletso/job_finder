import * as api from '../Api';

export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const authUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.authUser(user);
        
        dispatch({ type: 'FETCH', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const clearUser = () => (dispatch) => {
    dispatch({ type: 'CLEAR', payload: []});
}