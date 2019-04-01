import React, { Component } from "react";
import CreateBoard from "./create-board/CreateBoard";
import Board from "./create-board/Board";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      mas: [],
      title: "",
      isOpen: false
    };
  }

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onClickCreate = () => {
    if (this.state.title.length > 0) {
      this.setState({
        mas: this.state.mas.concat(this.state.title),
        title: "",
        isOpen: false,
      });
    }
  };

  onClickOpenBoard = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="container">
        <CreateBoard
          title={this.state.title}
          isOpen={this.state.isOpen}
          handleTitle={this.handleTitle}
          onClickCreate={() => this.onClickCreate()}
          onClickOpenBoard={() => this.onClickOpenBoard()}
        />
        {this.state.mas.length > 0 ? <Board mas={this.state.mas}/> : ""}
      </div>
    );
  }
}

export default Home;
