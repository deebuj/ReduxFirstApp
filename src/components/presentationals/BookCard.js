import React from "react";

//Provider/Container React Component
class BookCard extends React.Component {
  render() {
    return (
      <div>
        <img style={{ width: 50, height: 50 }} src={this.props.Book.cover} />
        <div>
          <strong>{this.props.Book.title}</strong>
        </div>
        <div>
          <strong>{this.props.Book.author}</strong>
        </div>
        <a href={this.props.Book.link}>{this.props.Book.link}</a>
        <hr />
      </div>
    );
  }
}
export default BookCard;
