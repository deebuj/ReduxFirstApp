import * as types from "./ActionTypes";

export function getUsers() {
  return {
    type: types.FETCH_USER_REQUESTED
  };
}

export function getPosts(id, anotherVal) {
  console.log("get posts");
  return {
    type: types.FETCH_USER_POSTS_REQUESTED,
    id: id,
    anotherVal: anotherVal
  };
}
