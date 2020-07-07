import {
  REQUEST_BOOKLIST,
  RECIEVE_BOOKLIST,
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_ITEM
} from '../actions/actionsTypes';

const initialState = {
  loading: false,
  bookList: []
}

export default (
  state = initialState,
  { type, payload }
) => {
  switch(type) {
    case REQUEST_BOOKLIST:
      return {
        ...state,
        loading: true
      }
    case RECIEVE_BOOKLIST:
      return {
        ...state,
        loading: false,
        bookList: payload.bookList
      }
    case ADD_ITEM:
      return {
        ...state,
        bookList: payload.newBook
      }
    case DELETE_ITEM:
      return {
        ...state,
        bookList: payload.newBook
      }
    case CHANGE_ITEM:
      return {
        ...state,
        bookList: payload.newBook
      }
    default:
      return state;
  }
}