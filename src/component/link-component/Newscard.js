import React, { Component } from 'react';

class Newscard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="container">
                <div className="row card-source">
                    <div className="col-md-4 ">
                        <img src={this.props.imageUrl} className="rounded float-left card-img" alt="..." />
                    </div>
                    <div className="col-md-8 card-text">
                        <div className="row">
                            <h4>{this.props.heading}</h4>
                        </div>
                        <div className="row">
                            <p>{this.props.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Newscard;