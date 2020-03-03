import React from "react";

export default class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rate: 0 };
  }

  upRate=()=> {
    const currentRate = this.state.rate;
    this.setState({ rate: currentRate + 1 });
  }

downRate=()=> {
    const currentRate = this.state.rate;
    this.setState({ rate: currentRate - 1 });
  }

  render() {
    return (
      <div>
        <div>Oceń to: </div>
        <button onClick={this.downRate}>-</button>
        <span>ocena tego piwa to : {this.state.rate}</span>
        <button onClick = {this.upRate}>+</button>
      </div>
    );
  }
}
