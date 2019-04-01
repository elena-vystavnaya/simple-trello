import React, { Component } from "react";

export default class List extends Component {
  state = {
    value: "",
    mas: []
  };

  handleValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({
        mas: this.state.mas.concat(this.state.value),
        value: ""
      });
    }
  };

  render() {
    return (
      <div className="box">
        <h1 className="list-title">{this.props.title}</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValue}
          onKeyPress={this.handleKeyPress}
        />
        {this.state.mas.map((item, index) => {
          return <p key={index} className="item">{item}</p>
        })}
      </div>
    );
  }
}
