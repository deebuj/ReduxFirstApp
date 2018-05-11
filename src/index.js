import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import MyComponent from "./components/MyComponent";

//redux stuff
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

//Bookstore stuff
import rootReducer from "./reducers";
import Books from "./components/containers/Books";
import UserList from "./components/containers/UserList";

import createSagaMiddleware from "redux-saga";
import indexSaga from "./sagas/index";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

//initialize store
const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(indexSaga);

const App = () => (
  <div style={styles}>
    <Books />
    <UserList />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
