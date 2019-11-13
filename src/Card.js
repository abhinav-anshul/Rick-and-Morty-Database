import React from "react";
import "normalize.css";
import "./Styles/Card.scss";

class Card extends React.Component {
  render() {
    return (
      <div className="card-container">
        <img
          src={this.props.imgURL}
          className="card-image"
          alt="Image failed to load"
        />
        <div className="card-details">
          <div className="card-name"> {this.props.name}</div>
          <h2>
            <span className="span">STATUS: </span>
            {this.props.status}
          </h2>
          <h2>
            <span className="span">SPECIES: </span>
            {this.props.species}
          </h2>
          {/* <h3>GENDER: {this.props.props}</h3> */}
          <h2>
            <span className="span">TYPE: </span>
            {this.props.type}
          </h2>
        </div>
      </div>
    );
  }
}

export default Card;
