import * as types from "./ActionTypes";

export function getUsers() {
  return {
    type: types.FETCH_USER_REQUESTED
  };
}
