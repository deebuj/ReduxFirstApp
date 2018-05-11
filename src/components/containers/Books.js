import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookCard from "../presentationals/BookCard";
import * as bookActions from "../../actions/BookActions";
import * as types from "../../actions/ActionTypes";

//Provider/Container React Component
class Books extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.addBook = this.addBook.bind(this);
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <input
          type="button"
          value="Add"
          //onClick={() => this.dispatchAction(types.ADD_BOOK)}
          onClick={this.addBook}
          className="icon fa fa-trash"
          aria-hidden="true"
        />
        <div>
          {this.props.books.map(book => <BookCard key={book.id} Book={book} />)}
        </div>
      </div>
    );
  }

  addBook = () => {
    var newbook = {
      id: 3,
      cover:
        "https://s3.amazonaws.com/titlepages.leanpub.com/reactjsforthevisuallearner/hero?1496374274",
      title: "React.js for the Visual Learner",
      author: "Mike Mangialardi",
      link: "https://leanpub.com/reactjsforthevisuallearner"
    };
    this.props.actions.bookActions.AddBook(newbook);
  };
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      bookActions: bindActionCreators(bookActions, dispatch)
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);
