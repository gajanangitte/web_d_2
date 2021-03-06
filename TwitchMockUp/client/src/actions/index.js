import steams from '../apis/steams';
import { 
    SIGN_IN,
    SIGN_OUT,
    CREATE_STEAM,
    FETCH_STEAMS,
    FETCH_STEAM,
    DELETE_STEAM,
    EDIT_STEAM,
    } from "./types";
import history from '../history';

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
}

export const createSteam = (formValues) => {
    return async (dispatch, getState) => {
    
       const { userId } = getState().auth;
       const response = await steams.post('/steams', {...formValues, userId})
     
    dispatch({ type: CREATE_STEAM, payload: response.data })
    history.push('/')
}

}

export const fetchSteams = () => {
    return async (dispatch) => {
       const response = await steams.get('/steams')
     
    dispatch({ type: FETCH_STEAMS, payload: response.data })
    }
}

export const fetchSteam = (id) => {
    return async (dispatch) => {
        const response = await steams.get(`/steams/${id}`)

        dispatch({type: FETCH_STEAM, payload: response.data})
    }
}

export const editSteam = (id, formValues) => {
    return async (dispatch) => {
        const response = await steams.patch(`/steams/${id}`, formValues)

        dispatch({type: EDIT_STEAM, payload: response.data})
        history.push('/')
    }
}

export const deleteSteam = (id, formValues) => {
    return async (dispatch) => {
        await steams.delete(`/steams/${id}`)

        dispatch({type: DELETE_STEAM, payload: id})
        history.push('/')
    }
}