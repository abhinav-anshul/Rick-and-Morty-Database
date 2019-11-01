import React from "react";
import axios from "axios";
import Card from "./Card";

class CardList extends React.Component {
  state = {
    url: "https://rickandmortyapi.com/api/character/?page=9",
    character: []
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({
      character: res.data.results
    });
  }

  render() {
    return (
      <div>
        {this.state.character.map(character => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            type={character.type ? character.type : "Unknown"}
          />
        ))}
      </div>
    );
  }
}

export default CardList;
