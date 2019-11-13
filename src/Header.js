import React from "react";
import "./Styles/Header.scss";
import DarkMode from "./DarkMode";

class Header extends React.Component {
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
      <div className="header-container">
        <div className="button-container">
          <div className="button-holder">
            {/* <button className="actual-button">DARK/LIGHT</button> */}
            <div className={toggle ? "dark-mode" : "light-mode"}>
              <button className="actual-button" onClick={this.handleChange}>
                DARK/LIGHT
              </button>
            </div>
          </div>
        </div>
        <div className="heading__main">Rick and Morty Database</div>
      </div>
    );
  }
}

export default Header;
