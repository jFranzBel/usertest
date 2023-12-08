// store/index.js
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, authReducer } from '../reducer/index';

const rootReducer = combineReducers({
     user: userReducer,
     auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
