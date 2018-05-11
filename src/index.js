import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import MyComponent from "./components/MyComponent";
//redux stuff
import { createStore } from "redux";
import { Provider } from "react-redux";
//Bookstore stuff
import BooksApp from "./reducers/BooksApp";
import Books from "./components/containers/Books";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

//initialize store
let store = createStore(BooksApp);
console.log(store.getState());

const App = () => (
  <div style={styles}>
    <Books store={store} />
    <MyComponent data1="passdata" />
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
