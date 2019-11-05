import React from "react";
import axios from "axios";
import Card from "./Card";

class CardList extends React.Component {
  state = {
    // url: `https://rickandmortyapi.com/api/character/${[...Array(494).keys()]}`,
    character: [],
    typedValue: ""
  };

  async componentDidMount() {
    //const res = await axios.get(this.state.url);
    const ids = Array(493)
      .fill(null)
      .map((_, idx) => idx + 1)
      .join(","); // '1,2,3...,300'
    const url = `https://rickandmortyapi.com/api/character/[${ids}]`;
    const res = await axios.get(url);

    this.setState({
      character: res.data
    });
  }

  // handleChange(e) {
  //   e.preventDefault();
  //   let typedValue = e.target.value;
  //   console.log(typedValue);
  // }

  handleChange = e => {
    e.preventDefault();
    let typedValue = e.target.value;
    this.setState({ typedValue });
  };

  render() {
    // let filter = this.state.character.filter(function(e) {
    //   return e.name.includes("Tiny Rick");
    // });
    const character = this.state.character;
    const typedValue = this.state.typedValue;
    let filter = character.filter(char => char.name.includes(typedValue));

    return (
      <div>
        <form>
          <input type="text" name="title" onChange={this.handleChange} />
        </form>

        {filter.map(character => (
          <Card
            key={character.id}
            imgURL={character.image}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            // gender={character.gender}
            type={character.type ? character.type : "Not Known"}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
