import React from 'react';

export default class OrderView extends React.Component {

    render() {
        return(
            <div className="orderView">
                <span>{this.props.book.name}</span>
                <button onClick={(event) => this.props.removeFromOrder(this.props.book.name)} className="btn btn-primary">Remove</button>
            </div>
        )
    }
}