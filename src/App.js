import React from "react";
import CardList from "./CardList";
import ThemeContextProvider from "./contexts/ThemeContext";

class App extends React.Component {
  render() {
    return (
      <div>
        <ThemeContextProvider>
          <CardList />
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
