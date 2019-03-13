import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import "../index.css";
import Footer from "./Footer";

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      order: [],
    }
  }



  addToOrder = (book) => {
    this.setState({
      order : [...this.state.order, book]
    })
  }

  removeFromOrder = (title) => {
      this.setState({
        order : this.state.order.filter( book => title !== book.name)
      })
  } 

  render() {
    document.body.style.backgroundImage = null;
    return (
      <div className="app container"/*container wyrownuje szer*/>
        <Header />
        <div className="row" /*klasa bootstrapowa row  dzieli nasze komponenty na rowne wiersze w kolumnie 3 w 1  */>
          <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
          <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
        </div>
          <Footer/>
      </div>
    );
  }
}

export default App;
