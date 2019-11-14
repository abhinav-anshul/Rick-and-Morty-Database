import React from "react";
import "./Styles/Header.scss";
import DarkMode from "./DarkMode";

import { ThemeContext } from "../src/contexts/ThemeContext";

class Header extends React.Component {
  static contextType = ThemeContext;

  state = {
    setClass: !JSON.parse(localStorage.getItem("Mode"))
  };

  handleChange = () => {
    this.setState({
      setClass: !this.state.setClass
    });
  };

  render() {
    const { toggleTheme } = this.context;

    ///
    const { isLightTheme, lightMode, darkMode } = this.context;
    const theme = isLightTheme ? lightMode : darkMode;
    ///

    localStorage.setItem("Mode", !this.state.setClass);
    let toggle = JSON.parse(localStorage.getItem("Mode"));
    console.log(toggle);

    return (
      <div className="header-container">
        <div
          style={{ backgroundColor: theme.mainBackground }}
          className="button-container"
        >
          <div className="button-holder">
            {/* <button className="actual-button">DARK/LIGHT</button> */}
            <div className={toggle ? "dark-mode" : "light-mode"}>
              {/* <button className="actual-button" onClick={this.handleChange}> */}
              <button
                style={{
                  backgroundColor: theme.textColor,
                  color: theme.mainBackground
                }}
                className="actual-button"
                onClick={toggleTheme}
              >
                DARK/LIGHT
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: theme.mainBackground,
            color: theme.textColor
          }}
          className="heading__main"
        >
          Rick and Morty Database
        </div>
      </div>
    );
  }
}

export default Header;
