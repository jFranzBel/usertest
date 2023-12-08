import {
     CREATE_USER_REQUEST,
     CREATE_USER_SUCCESS,
     CREATE_USER_FAILURE,
     LOGIN_USER_REQUEST,
     LOGIN_USER_SUCCESS,
     LOGIN_USER_FAILURE,
     LOGOUT_USER,
} from '../action-types';

const initialUserState = {
     user: null,
     loading: false,
     error: null,
};

const initialAuthState = {
     token: null,
     loading: false,
     error: null,
};

export const userReducer = (state = initialUserState, action) => {
     switch (action.type) {
          case CREATE_USER_REQUEST:
               return { ...state, loading: true, error: null };
          case CREATE_USER_SUCCESS:
               return { ...state, user: action.payload, loading: false };
          case CREATE_USER_FAILURE:
               return { ...state, loading: false, error: action.payload };
          case LOGOUT_USER:
               return { ...initialAuthState };

          default:
               return state;
     }
};

export const authReducer = (state = initialAuthState, action) => {
     switch (action.type) {
          case LOGIN_USER_REQUEST:
               return { ...state, loading: true, error: null };
          case LOGIN_USER_SUCCESS:
               return { ...state, token: action.payload, loading: false };
          case LOGIN_USER_FAILURE:
               return { ...state, loading: false, error: action.payload };

          default:
               return state;
     }
};

