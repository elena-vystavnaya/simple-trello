import React, { Component } from "react";
import './home.css';

export default class CreateBoard extends Component {
  render() {
    return (
      <div className="box create-box">
          {!this.props.isOpen ?  
          <h3 onClick={this.props.onClickOpenBoard}>Create new boarder</h3> : 
          <div className="form">
              <input type="text" value={this.props.title} onChange={this.props.handleTitle}/>
              <button onClick={this.props.onClickOpenBoard}>Cancel</button>
              <button onClick={this.props.onClickCreate}>Create</button>
          </div>
        }      
      </div>
    );
  }
}
