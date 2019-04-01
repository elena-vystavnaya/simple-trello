import React, { Component } from "react";
import List from "./List";
import AddList from "./AddList";

export default class ListPage extends Component {
  state = {
    isOpen: true,
    title: "",
    masTitle: []
  };

  handleValue = e => {
    this.setState({
      title: e.target.value
    });
  };

  onClickToggleList = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onClickAddList = () => {
    this.setState({
      masTitle: this.state.masTitle.concat(this.state.title),
      title: ""
    });
  };

  render() {
    return (
      <div>
        {this.state.masTitle.length > 0
          ? this.state.masTitle.map((item, index) => {
              return <List key={index} title={item} />;
            })
          : ""}
        {this.state.isOpen ? (
          <div>
            <div className="box">
              <input
                type="text"
                placeholder="add list..."
                value={this.state.title}
                onChange={this.handleValue}
              />
              <div className="btns">
                <button onClick={this.onClickToggleList}>Close</button>
                <button onClick={this.onClickAddList}>Add</button>
              </div>
            </div>
          </div>
        ) : (
          <AddList onClickToggleList={() => this.onClickToggleList()} />
        )}
      </div>
    );
  }
}
