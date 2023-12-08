import axios from 'axios';
import {
     CREATE_USER_REQUEST,
     CREATE_USER_SUCCESS,
     CREATE_USER_FAILURE,
     LOGIN_USER_REQUEST,
     LOGIN_USER_SUCCESS,
     LOGIN_USER_FAILURE,
     LOGOUT_USER,
} from '../action-types/index';

const API_BASE_URL = 'http://localhost:3000'; // Update with your backend API URL

// Action creators for createUser
export const createUserRequest = () => ({ type: CREATE_USER_REQUEST });
export const createUserSuccess = (user) => ({ type: CREATE_USER_SUCCESS, payload: user });
export const createUserFailure = (error) => ({ type: CREATE_USER_FAILURE, payload: error });

export const createUser = (userData) => async (dispatch) => {
     dispatch(createUserRequest());
     try {
          const response = await axios.post(`${API_BASE_URL}/users`, userData);
          dispatch(createUserSuccess(response.data));
     } catch (error) {
          dispatch(createUserFailure(error.response ? error.response.data : 'Server error'));
     }
};

// Action creators for loginUser
export const loginUserRequest = () => ({ type: LOGIN_USER_REQUEST });

export const loginUserSuccess = (token) => {
     // Save the token to local storage
     localStorage.setItem('token', token);
     return { type: LOGIN_USER_SUCCESS, payload: token };
};

export const loginUserFailure = (error) => ({ type: LOGIN_USER_FAILURE, payload: error });

export const loginUser = (loginData) => async (dispatch) => {
     dispatch(loginUserRequest());
     try {
          const response = await axios.post(`${API_BASE_URL}/login`, loginData);
          dispatch(loginUserSuccess(response.data.token));
     } catch (error) {
          dispatch(loginUserFailure(error.response ? error.response.data : 'Authentication failed'));
     }
};

export const logoutUser = () => { localStorage.removeItem('token'); return { type: LOGOUT_USER } };
