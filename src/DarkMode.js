import React from "react";
import "./DarkMode.scss";

class DarkMode extends React.Component {
  state = {
    setClass: !JSON.parse(localStorage.getItem("Mode"))
  };

  handleChange = () => {
    this.setState({
      setClass: !this.state.setClass
    });
  };

  render() {
    localStorage.setItem("Mode", !this.state.setClass);
    let toggle = JSON.parse(localStorage.getItem("Mode"));
    console.log(toggle);
    return (
      <div className={toggle ? "dark-mode" : "light-mode"}>
        <nav>Toggle goes Here</nav>
        <main>
          <h1>Light Mode</h1>
          <h2>Toggle the switch to see some magic happen!</h2>
          <button onClick={this.handleChange}>Switch</button>
        </main>
      </div>
    );
  }
}

export default DarkMode;
