import { call, put, fork } from "redux-saga/lib/effects";
import { takeEvery } from "redux-saga/lib/effects";

import * as ActionTypes from "../actions/ActionTypes";
import UserAPI from "../api/userApi";

function* fetchUsers() {
  const response = yield UserAPI.getUsers();
  yield put({ type: ActionTypes.FETCH_USER_SUCCEEDED, payload: { response } });
}
function* fetchPosts(payload) {
  const response = yield UserAPI.getPosts(payload.id);
  console.log(response);
  yield put({
    type: ActionTypes.FETCH_USER_POSTS_SUCCEEDED,
    payload: { response }
  });
}

export default function* forks() {
  yield fork(takeEvery, ActionTypes.FETCH_USER_REQUESTED, fetchUsers);
  yield fork(takeEvery, ActionTypes.FETCH_USER_POSTS_REQUESTED, fetchPosts);
}
