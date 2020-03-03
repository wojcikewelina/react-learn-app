import React, { Component } from "react";
import Beer from "../Components/Bear";


export default class BearPage extends Component {
  constructor(props) {
    super(props);
    this.state = { allBeers: [] };
  }

  getAllBeers() {
    fetch("https://us-central1-irfighters-beer.cloudfunctions.net/api1/beer/")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);
        this.setState({ allBeers: resp });
      });
  }

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    if (this.state.allBeers.length === 0) {
      return <h1>Loading...</h1>;
    }
    const allBeerComponents = this.state.allBeers.map((beer, index) => {
      return (
        <Beer
          name={beer.name}
          ibu={beer.IBU}
          url={beer.imgSrc}
          key={index + "komponent"}
        />
      );
    });
    console.log(this.state.allBeers);
    return (
      <div>
        <article>{allBeerComponents}</article>
        <h1> Pzzeskoczmy na tę stronkę :) Beer Page</h1>
      </div>
    );
  }
}
