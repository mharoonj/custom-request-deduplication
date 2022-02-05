import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {apiReducer} from './reducers/apiReducer';

export const configureStore = createStore(combineReducers({api:apiReducer})
    ,
  applyMiddleware(thunk)
);