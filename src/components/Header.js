import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      bookstoreName: "Black Books",
      clicked: true,
      textColor : "white",
      backgroundColor : "black"
    };
  }

  hadleClick = () => {
    if (this.state.clicked) {
      this.setState({
        bookstoreName: "White Books",
        textColor : "black",
        backgroundColor : "white"
      });
    } else {
      this.setState({
        bookstoreName: "Black Books",
        textColor : "white",
        backgroundColor : "black"
      });
    }
    this.setState({
      clicked: !this.state.clicked
    });
  };
  render() {

    let headerCss = {
        color : this.state.textColor,
        backgroundColor : this.state.backgroundColor
    }

    return (
      <div className="row" style={headerCss} onClick={this.hadleClick} /*chcemy aby byl wierszem dlatego row*/>
          <h1 className="col text-center">{this.state.bookstoreName}</h1>
        <Link to="/admin"><button className="col btn btn-info">Administrator Panel</button></Link>
      </div>
    );
  }
}

export default Header;
