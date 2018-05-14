"use strict";
import userSaga from "./userSaga";

export default function* indexSaga() {
  yield* userSaga();
}
