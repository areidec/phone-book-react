import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bookListReducer from './bookListReduser';

export default combineReducers({
  authReducer,
  bookListReducer
});