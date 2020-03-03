import React, {Component} from "react";
import Rate from "./Rate";

class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    const { name, ibu, url } = this.props;

    return (
      <section className="beer-component">
        <div>
          <img src={url} className="beer-picture" alt="piii" />
        </div>
        <h3>Nazwa: {name}</h3>
        <h4>IBU: {ibu}</h4>
        <button onClick={this.updateCountOfBeers}>Wypij!</button>
        <span>Wypite: {this.state.count} napoje</span>
        <Rate/>
      </section>
    );
  }
updateCountOfBeers = () => {
  const numberOfDrinkedBeers = this.state.count +1;
  this.setState({ count: numberOfDrinkedBeers })
  console.log(this.state.count)
};
}
export default Beer;


