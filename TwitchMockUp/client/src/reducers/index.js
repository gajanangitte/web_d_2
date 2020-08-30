import  {combineReducers} from 'redux';
import authReducer from './authReducer';
import {reducer as formReducer} from 'redux-form';
import steamReducer from './steamReducer';

export default combineReducers ({
    auth: authReducer,
    form: formReducer,
    steams: steamReducer,
})