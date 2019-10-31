import React from "react";
import axios from "axios";

//const BASE_URL = "https://rickandmortyapi.com/api/";

class App extends React.Component {
  getData = async e => {
    e.preventDefault();
    const url = await axios("https://rickandmortyapi.com/api/character");
    //const newData = url.data.results[2].name;

    const newData = url.data.results.forEach(function(element) {
      return console.log(element.name);
    });
  };

  state = {
    url: "https://rickandmortyapi.com/api/character",
    character: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({
      character: res.data.results.forEach(function(element) {
        return element.name;
      })
    });
  }

  render() {
    return (
      <div>
        {/* <Character getData={this.getData} /> */}
        <h1>{this.state.character}</h1>
      </div>
    );
  }
}

export default App;
