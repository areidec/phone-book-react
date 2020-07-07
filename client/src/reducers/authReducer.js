import {
  REQUEST_LOGIN,
  LOGIN,
  CHECK_IS_LOGINED,
  FAILED_LOGIN,
  LOGOUT
} from '../actions/actionsTypes';

const initialState = {
  isLogined: false,
  userName: '',
  userId: '',
  errors: ''
}

export default (
  state = initialState,
  { type, payload }
) => {
  switch(type) {
    case CHECK_IS_LOGINED:
      return {
        ...state,
        isLogined: payload.isLogined,
        userName: payload.userName,
        userId: payload.userId
      }
    case FAILED_LOGIN: 
      return {
        ...state,
        errors: payload.errors
      }
    case LOGIN: 
      return {
        ...state,
        ...payload
      }
    case LOGOUT:
      return {
        ...initialState
      }
    default:
      return state;
  }
}