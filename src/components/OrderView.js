import React from 'react';

export default class OrderView extends React.Component {

    render() {
        return(
            <div className="orderView row">
            <div className="col-md-6">
            <span>{this.props.book.name}</span>
            </div>
            <div className="col-md-6">
            <button onClick={(event) => this.props.removeFromOrder(this.props.book.name)} className="btn btn-danger">Remove</button>
            </div>
            </div>
        )
    }
}