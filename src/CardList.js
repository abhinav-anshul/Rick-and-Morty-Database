import React from "react";
import axios from "axios";
import Card from "./Card";
import Header from "./Header";
import "./Styles/CardList.scss";

import { ThemeContext } from "./contexts/ThemeContext";

class CardList extends React.Component {
  static contextType = ThemeContext;

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

  handleChange = e => {
    e.preventDefault();
    let typedValue = e.target.value;
    this.setState({ typedValue });
  };

  render() {
    /////
    const { isLightTheme, lightMode, darkMode } = this.context;
    const theme = isLightTheme ? lightMode : darkMode;
    /////

    const character = this.state.character;
    const typedValue = this.state.typedValue;
    let filter = character.filter(char =>
      char.name.toLowerCase().includes(typedValue.toLowerCase())
    );

    return (
      <div className="body-container">
        <Header />
        <div
          style={{ backgroundColor: theme.mainBackground }}
          className="form-container"
        >
          <form className="actual-form">
            <input
              style={{ color: theme.textColor, fontWeight: 400 }}
              type="text"
              name="title"
              className="actual-input-box"
              placeholder="Search Characters"
              onChange={this.handleChange}
            />
          </form>
        </div>
        <div
          style={{ backgroundColor: theme.mainBackground }}
          className="cardlist-container"
        >
          {filter.map(character => (
            <Card
              key={character.id}
              imgURL={character.image}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              type={character.type ? character.type : "Not Known"}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
