import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import MyComponent from "./components/MyComponent";
//redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
//Bookstore stuff
import rootReducer from "./reducers";
import Books from "./components/containers/Books";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

//initialize store
let store = createStore(rootReducer);

const App = () => (
  <div style={styles}>
    <Books />
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
