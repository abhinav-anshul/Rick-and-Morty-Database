import React from "react";
import CardList from "./CardList";
import Search from "./Search";

//const BASE_URL = "https://rickandmortyapi.com/api/";

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <CardList />
      </div>
    );
  }
}

export default App;
