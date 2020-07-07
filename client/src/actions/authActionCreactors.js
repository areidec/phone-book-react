import {
  REQUEST_LOGIN,
  LOGIN,
  CHECK_IS_LOGINED,
  FAILED_LOGIN,
  LOGOUT
} from './actionsTypes';

import Api from '../api';
const api = new Api();

export const checkIsLogined = () => dispatch => {
  if (localStorage.getItem('userName')) {
    const {username, userId} = JSON.parse(localStorage.getItem('userName'));
    dispatch({type: CHECK_IS_LOGINED, payload: {
      isLogined: true,
      userName: username,
      userId
    }})
  } else {
    dispatch({type: CHECK_IS_LOGINED, payload: {
      isLogined: false,
      userName: ''
    }})
  }
  
}

export const logIn = ({username, password}) => async dispatch => {
  dispatch({type: REQUEST_LOGIN});
  const user = await api.getUser(username);

  if (user.error) {
    dispatch({type: FAILED_LOGIN, payload: {
      errors: user.error
    }})
  } else {
    if (user.password === password) {
      localStorage.setItem('userName', JSON.stringify({
        username,
        userId: user.id
      }));
      dispatch({type: LOGIN, payload: {
        isLogined: true,
        username,
        userId: user.id,
        errors: ''
      }})
    } else {
      dispatch({type: FAILED_LOGIN, payload: {
        errors: 'Пароль не вверен'
      }})
    }
  }
}

export const logout = () => async dispatch => {
  dispatch({type: LOGOUT});
  localStorage.removeItem('userName');
}