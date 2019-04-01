import React, { Component } from 'react'

export default class AddList extends Component {
  render() {
    return (
      <div className="box add-list">
           <p onClick={this.props.onClickToggleList}>Add list...</p>
      </div>
    )
  }
}
