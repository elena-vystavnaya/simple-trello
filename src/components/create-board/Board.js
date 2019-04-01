import React, { Component } from "react";
import {Link } from "react-router-dom";


export default class Board extends Component {
  render() {
    return (
      <div>
        {this.props.mas.map((item, index) => {
          return (
            <div className="box" key={index}>
              <Link to={{pathname:'/list', state:{title: item}}}><h3>{item}</h3></Link>
            </div>
          );
        })}
      </div>
    );
  }
}
