import * as types from "./ActionTypes";

export function getUsers() {
  console.log("fetch user function");
  return {
    type: types.FETCH_USER_REQUESTED
  };
}
