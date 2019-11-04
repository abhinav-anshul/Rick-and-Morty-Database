import React from "react";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";
import Search2 from "./Search2";

class CardList extends React.Component {
  state = {
    // url: `https://rickandmortyapi.com/api/character/${[...Array(494).keys()]}`,
    character: []
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

  render() {
    return (
      <div>
        {/* {this.state.character.map(character => (
          <Search2 name={character.name} />
        ))} */}
        {let filter = this.state.character.filter(function(e){
          return e.name.includes("Rick")
        }

        filter.map(character => (
          <Card
            key={character.id}
            imgURL={character.image}
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
