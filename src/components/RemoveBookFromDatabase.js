import React from "react";
import { fbase } from "../fbase";

class RemoveBookFromDatabase extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      selectedBook: "",
      validationError: ""
    };
  }

  componentDidMount() {
    this.ref = fbase.syncState("bookstore/books", {
      context: this,
      state: "books"
    });
  }

  componentWillUnmount() {
    fbase.removeBinding(this.ref);
  }

  removeBook = title => {
    this.setState({
      books: this.state.books.filter(book => title !== book.name)
    });
  };

  render() {
    let list;

    if (this.state.books) {
      list = (
        <div className="deletePanel align-self-center">
          <form>
            <select
              name="removeBooks"
              class="form-control text"
              value={[this.state.selectedBook]}
              multiple={true}
              onChange={e =>
                this.setState({
                  selectedBook: e.target.value,
                  validationError:
                    e.target.value === "" ? "You must select your book" : ""
                })
              }
            >
              {this.state.books.map(book => (
                <option value={book.name}>{book.name}</option>
              ))}
            </select>
            <button
              onClick={event => this.removeBook(this.state.selectedBook)}
              className="btn btn-danger"
            >
              Remove
            </button>
          </form>
        </div>
      );
    } else {
      list = <div>No books in state</div>;
    }

    return <div>{list}</div>;
  }
}

export default RemoveBookFromDatabase;
