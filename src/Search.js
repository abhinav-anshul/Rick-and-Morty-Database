import React from "react";
import ReactDOM from "react-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const searchValue = this.state.fullName;
    console.log(searchValue);

    if (searchValue == "Rick") {
      console.log("matched");
    } else {
      console.log("doesnt match");
    }
    console.log(this.props);
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const fullName = this.state.fullName;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>You are searching for : {fullName}</p>
        <p>
          <input
            type="text"
            placeholder="Rick Sanchez"
            name="fullName"
            onChange={this.handleInputChange}
          />
        </p>
        <p>
          <button>Search</button>
        </p>
        <p>{this.props.name}</p>
      </form>
    );
  }
}

export default Search;
