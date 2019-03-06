import React from "react";
import { fbase } from "../fbase";

class AdminPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: ""
      }
    };
  }

  handleChange = event => {
    let newBook;

    if (event.target.name === "onStock") {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.checked
      };
    } else {
      newBook = {
        ...this.state.book,
        [event.target.name]: event.target.value
      };
    }
    this.setState({
      book: newBook
    });
  };

  addNewBook = event => {
    event.preventDefault();

    let newBook = { ...this.state.book };

    //  this.props.addBook(newBook);
    if (Array.isArray(this.state.books)) {
      this.setState({
        books: [...this.state.books, newBook],
        book: {
          name: "",
          author: "",
          description: "",
          onStock: true,
          image: ""
        }
      });
    }
    else {
      this.setState({
        books: [newBook],
        book: {
          name: "",
          author: "",
          description: "",
          onStock: true,
          image: ""
        }
      });
    }
  };

  componentDidMount() {
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: 'books'
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="adminPanel align-self-center">
        <form onSubmit={this.addNewBook}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book name"
              id="name"
              name="name"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book author"
              id="author"
              name="author"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.author}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Book description"
              id="description"
              name="description"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.description}
            />
          </div>
          <div className="form-group">
            <input
              type="checkbox"
              id="onStock"
              name="onStock"
              onChange={this.handleChange}
              value={this.state.book.onStock}
            />
            <label htmlFor="onStock" className="form-check-label">
              On stock
            </label>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Book image"
              id="image"
              name="image"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.book.image}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AdminPanel;
