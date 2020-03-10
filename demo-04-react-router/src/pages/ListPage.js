import React, { Component } from "react";

export default class ListPage extends Component {
  state = {};

  componentDidMount() {
    let tempId = this.props.match.params.id;
    this.setState({ id: tempId });
  }

  render() {
    return (
      <div>
        <h2>Bojack ListPage -> {this.state.id}</h2>
      </div>
    );
  }
}
