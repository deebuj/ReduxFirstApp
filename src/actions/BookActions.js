import * as types from "./ActionTypes";

export function AddBook(payload) {
  console.log("Add function");
  return {
    type: types.ADD_BOOK,
    payload
  };
}
