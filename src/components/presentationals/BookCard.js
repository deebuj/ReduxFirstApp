import React from "react";

//Provider/Container React Component
class BookCard extends React.Component {
  render() {
    return (
      <div>
        <img style={{ width: 250, height: 323 }} src={this.props.Book.cover} />
        <h2>{this.props.Book.title}</h2>
        <h3>{this.props.Book.author}</h3>
        <a href={this.props.Book.link}>{this.props.Book.link}</a>
      </div>
    );
  }
}
export default BookCard;
