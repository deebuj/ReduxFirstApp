//define the initial state
const initialState = {
  posts: [],
  users: [],
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

export default initialState;
