import React from "react";
import { fbase, firebaseApp } from "../fbase";
class AddBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      book: {
        name: "",
        author: "",
        description: "",
        onStock: true,
        image: "",
        genre: ""
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
    if (Array.isArray(this.state.books)) {
      this.setState({
        books: [...this.state.books, newBook],
        book: {
          name: "",
          author: "",
          description: "",
          onStock: true,
          image: "",
          genre: ""
        }
      });
    } else {
      this.setState({
        books: [newBook],
        book: {
          name: "",
          author: "",
          description: "",
          onStock: true,
          image: "",
          genre: ""
        }
      });
    }
  };

  logout = event => {
    event.preventDefault();
    firebaseApp
      .auth()
      .signOut()
      .then(() => {
        this.props.changeLoggedIn(false);
        localStorage.setItem("loggedIn", false);
      })
      .catch(() => {
        console.log("Can not logout");
      });
  };

  componentDidMount() {
    if (localStorage.getItem("loggedIn")) {
      this.setState({ loggedIn: localStorage.getItem("loggedIn") });
    }
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
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
            <select
              class="form-control"
              id="genre"
              
              name="genre"
              onChange={this.handleChange}
              value={this.state.book.genre}
            >
            <option selected>Genre...</option>
              <option value="Crime">Crime</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Drama">Drama</option>
              <option value="Romance">Romance</option>
            </select>
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
          <button onClick={this.logout} className="btn btn-primary float-right">
            Logout
          </button>
        </form>
      </div>
    );
  }
}
export default AddBookForm;
