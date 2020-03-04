import React, { Component } from "react";
import { getAllBreadTypes } from "../services/breadTypeArr";

class DetailsOfBread extends Component {
  constructor(props) {
    super(props), 
    this.state = { visibility: false };
  }

  render(){
    return <div>
    <h1 >{this.props.name}</h1>
    </div>
  };
}

export default class Bread extends Component {
  constructor(props) {
    super(props), (this.state = { allBreadTypes: [] });
  }

  componentDidMount() {
    getAllBreadTypes().then(bread => {
      this.setState({ allBreadTypes: bread });
      console.log(this.state.allBreadTypes);
    });
  };

  render() {
    const allBreadComponents = this.state.allBreadTypes.map(bread => {
      return (
        <div onClick={this.breadDetails}>
          <h1>{bread.name}</h1>ocena: {bread.rate}
          <DetailsOfBread name={bread.name} description={bread.description} mapUrl={bread.mapUrl} picturesUrl = {bread.picturesUrl}/>
        </div>
      )
    });

    return allBreadComponents;
  }

  breadDetails() {
    
  };
};


// Zbuduj aplikację do oceny knajp, aplikacja powinna posiadać:
// • Widok z listą knajp na której jest widoczna nazwa knajpy i ocena
// • Widok z szczegółami knajpy – strona powinna wyświetlać takie informacje jak
// • Opis
// • Ocene
// • Slajder ze zdjęciami
// • Miejsce na mapę z lokalizacją knajpy
// • Miejsce z komentarzami
// • Widok na którym jest formularz dododawanianowych knajp;
