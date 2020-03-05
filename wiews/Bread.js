import React, { Component } from "react";
import { getAllBreadTypes } from "../services/breadTypeArr";

class DetailsOfBread extends Component {
  render() {
    const {
      name,
      rate,
      description,
      mapUrl,
      picturesUrl,
      startPicture
    } = this.props;
    return (
      <div>
        <h3>Opis naszej buły to:</h3>
        <p>{description}</p>
    
      </div>
    );
  }
}

class BreadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { visibility: false };
  }
  showOrHideDetails = () => {
    const currentVisibilityState = this.state.visibility;
    this.setState({ visibility: !currentVisibilityState });
  };

componentDidMount(){
  console.log(this.props.description)
}

  render() {
    const {
      name,
      rate,
      description,
      mapUrl,
      picturesUrl,
      startPicture
    } = this.props;
    return (
      <div class="breadComponent">
        <div onClick={this.showOrHideDetails}>
          <img className="startPicture" src={startPicture} />
          <span className="breadComponentName">{name}</span> ocena: {rate}
        </div>
        {this.state.visibility == true ? (
          <DetailsOfBread
            name={name}
            description={description}
            mapUrl={mapUrl}
            picturesUrl={picturesUrl}
            startPicture={startPicture}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
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
  }

  render() {
    const allBreadComponents = this.state.allBreadTypes.map(bread => {
      return (
        <div onClick={this.breadDetails}>
          <BreadComponent name={bread.name} rate={bread.rate} startPicture={bread.startPicture}  description={bread.description} mapUrl={bread.mapUrl}
            picturesUrl={bread.picturesUrl} />
            
        </div>
      );
    });

    return allBreadComponents;
  }

  breadDetails() {}
}

// Zbuduj aplikację do oceny knajp, aplikacja powinna posiadać:
// • Widok z listą knajp na której jest widoczna nazwa knajpy i ocena
// • Widok z szczegółami knajpy – strona powinna wyświetlać takie informacje jak
// • Opis
// • Ocene
// • Slajder ze zdjęciami
// • Miejsce na mapę z lokalizacją knajpy
// • Miejsce z komentarzami
// • Widok na którym jest formularz dododawanianowych knajp;
