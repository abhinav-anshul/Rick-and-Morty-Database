import React from "react";
import ReactDOM from "react-dom";
import "./DarkMode.scss";

class DarkMode extends React.Component {
  state = {
    setClass: ""
  };

  handleChange = () => {
    this.setState({
      setClass: "dark-mode"
    });
    localStorage.setItem("Mode", this.state.setClass);
  };
  render() {
    return (
      //   <div className={this.state.setClass ? this.state.setClass : "light-mode"}>
      <div className={localStorage.getItem("Mode")}>
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
