import { call, put, fork } from "redux-saga/lib/effects";
import { takeEvery } from "redux-saga/lib/effects";

import * as ActionTypes from "../actions/ActionTypes";
import UserAPI from "../api/userApi";

function* fetchUsers() {
  console.log("fetch user api");
  const response = yield UserAPI.getUsers();
  yield put({ type: ActionTypes.FETCH_USER_SUCCEEDED, payload: { response } });
}

export default function* forks() {
  console.log("Test");
  yield fork(takeEvery, ActionTypes.FETCH_USER_REQUESTED, fetchUsers);
}
