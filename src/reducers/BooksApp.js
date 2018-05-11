import * as types from "../actions/ActionTypes";

//define the initial state
const initialState = {
  books: [
    {
      id: 1,
      cover:
        "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
      title: "React.js for the Visual Learner",
      author: "Mike Mangialardi",
      link: "https://leanpub.com/reactjsforthevisuallearner"
    },
    {
      id: 2,
      cover: "",
      title: "Another Book",
      author: "Mike Mangialardi",
      link: "https://leanpub.com/reactjsforthevisuallearner"
    }
  ]
};

//define a reducer with an initialized state action
function BooksApp(state = initialState, action) {
  //eventually adding logic to handle create, update, and delete
  switch (action.type) {
    case "ADD_BOOK":
      console.log("reducer add_book");
      return { ...state, books: [...state.books, action.payload] };
    case types.DELETE_BOOK:
      console.log("not implemented yet");
      return state;
    default:
      return state;
  }
}

export default BooksApp;
