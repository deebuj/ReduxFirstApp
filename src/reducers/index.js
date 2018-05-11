import * as types from "../actions/ActionTypes";
import initialState from "./initialState";

//define a reducer with an initialized state action
function BooksApp(state = initialState, action) {
  //eventually adding logic to handle create, update, and delete
  switch (action.type) {
    case "ADD_BOOK":
      console.log("reducer add_book");
      return { ...state, books: [...state.books, action.payload] };
    case types.DELETE_BOOK:
      console.log("not implemented yet");
      return state;
    case types.FETCH_USER_SUCCEEDED:
      console.log(action.payload);
      return { ...state, users: [...state.users, ...action.payload.response] };
    default:
      return state;
  }
}

export default BooksApp;
