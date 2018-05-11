"use strict";
import userSaga from "./userSaga";

export default function* indexSaga() {
  console.log("test");
  yield* userSaga();
}
