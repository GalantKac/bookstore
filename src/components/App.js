import React from "react";
import AdminPanel from "./AdminPanel";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

import "../index.css";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      books: []
    }
  }

  addNewBook = (book) => {

    let newBooks = [...this.state.books];

    newBooks.push(book);

    this.setState ({
        books : newBooks
    })

  }

  render() {
    return (
      <div className="app container"/*container wyrownuje szer*/>
        <Header />
        <div className="row" /*klasa bootstrapowa row  dzieli nasze komponenty na rowne wiersze w kolumnie 3 w 1  */>
          <Order />
          <Inventory books={this.state.books}/>
          <AdminPanel books={this.state.books} addBook={this.addNewBook}/>
        </div>
      </div>
    );
  }
}

export default App;
