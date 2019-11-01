import React from "react";

class Card extends React.Component {
  state = {
    id: "",
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    imgURL: ""
  };

  componentDidMount() {
    const id = this.props.id;
    const name = this.props.name;
    const status = this.props.status;
    const species = this.props.species;
    const gender = this.props.gender;
    const type = this.props.type;
    const imgURL = `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
    //console.log(this.props);

    this.setState({
      id: id,
      name: name,
      status: status,
      species: species,
      gender: gender,
      type: type,
      imgURL: imgURL
    });
  }

  render() {
    return (
      <div>
        <h1>ID: {this.state.id}</h1>
        <img src={this.state.imgURL} alt="Image failed to load" />
        <h1>NAME: {this.state.name}</h1>
        <h2>STATUS: {this.state.status}</h2>
        <h3>SPECIES: {this.state.species}</h3>
        <h3>GENDER: {this.state.props}</h3>
        <h4>TYPE: {this.state.type}</h4>
      </div>
    );
  }
}

export default Card;
