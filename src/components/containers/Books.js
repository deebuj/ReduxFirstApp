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
    this.state = {
      book: {}
    };
    this.addBook = this.addBook.bind(this);
  }

  setData = e => {
    let newBook = { ...this.state.book };
    newBook[e.target.name] = e.target.value;
    this.setState({ book: newBook });
  };

  componentWillMount() {}

  render() {
    return (
      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <input type="text" name="title" onChange={this.setData} />
                </td>
              </tr>
              <tr>
                <td>Author</td>
                <td>
                  <input type="text" name="author" onChange={this.setData} />
                </td>
              </tr>
              <tr>
                <td />
                <td>
                  <input
                    type="button"
                    value="Add"
                    //onClick={() => this.dispatchAction(types.ADD_BOOK)}
                    onClick={this.addBook}
                    className="icon fa fa-trash"
                    aria-hidden="true"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h2>Book List</h2>
          {this.props.books.map(book => <BookCard key={book.id} Book={book} />)}
        </div>
      </div>
    );
  }

  addBook = () => {
    this.props.actions.bookActions.AddBook(this.state.book);
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
