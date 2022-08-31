import React, { Component } from "react";

class OldReactComponent extends Component {
  // remplacer par useState
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      age: 23,
      name: "Denis",
    };
    this.handleClick = this.handleClick.bind(this); // remonter les fonctions avec le bind()
  }

  // remplacer par un useEffect, avec le callback
  componentDidMount() {
    // Algo à faire quand le composant se monte
  }

  handleClick() {
    // Algo
  }

  render() {
    return <div></div>;
  }
}

export default OldReactComponent;
