import {
  REQUEST_BOOKLIST,
  RECIEVE_BOOKLIST,
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_ITEM
} from './actionsTypes';

import Api from '../api';
const api = new Api();

export const getBooks = (userId) => async dispatch => {
  dispatch({type: REQUEST_BOOKLIST, payload: {
    loading: true
  }})

  const result = await api.getBookList(userId);

  dispatch({type: RECIEVE_BOOKLIST, payload: {
    loading: false,
    bookList: result
  }})
}

export const addItem = ({name, tel}, oldBookList) => async dispatch => {
  const id = +new Date();
  const newItem = {
    name,
    tel,
    id
  }
  let newBook = {
    id: oldBookList.id,
    user: oldBookList.user,
    list: oldBookList.list
  };
  newBook.list.push(newItem);
  dispatch({type: ADD_ITEM, payload: {
    newBook
  }});
  api.patchPhoneBook(oldBookList.id, JSON.stringify(newBook));
}

export const deleteItem = (id, oldBookList) => async dispatch => {
  let newBook = {
    id: oldBookList.id,
    user: oldBookList.user,
    list: oldBookList.list
  };
  const idx = newBook.list.findIndex(el => el.id === id);
  newBook.list.splice(idx, 1);
  dispatch({type: DELETE_ITEM, payload: {
    newBook
  }});
  api.patchPhoneBook(oldBookList.id, JSON.stringify(newBook));
}


export const changeItem = ({name, tel, id}, oldBookList) => async dispatch => {
  let newBook = {
    id: oldBookList.id,
    user: oldBookList.user,
    list: oldBookList.list
  };
  let idx = newBook.list.findIndex(el => el.id === id);

  newBook.list[idx] = {
    ...newBook.list[idx],
    name,
    tel,
  }
  dispatch({type: CHANGE_ITEM, payload: {
    newBook
  }});
  api.patchPhoneBook(oldBookList.id, JSON.stringify(newBook));
}