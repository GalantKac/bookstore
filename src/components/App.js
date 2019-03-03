import React from "react";
import AdminPanel from "./AdminPanel";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    // return <div><i>Hellow World</i></div> //jsx html w js
    return (
      <div>
        <Header />
        <Order />
        <Inventory />
        <AdminPanel />
      </div>
    );
  }
}

export default App;
