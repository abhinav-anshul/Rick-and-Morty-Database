import React from "react";

class Search2 extends React.Component {
  handleSubmit = event => {
    event.preventDefault();

    const searchValue = event.target.value;

    if (searchValue === "{this.props.name}") {
      console.log("matched");
    } else {
      console.log("doesnt match");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <input type="text" placeholder="Enter character" name="fullName" />
        </p>
        <p>
          <button>Search2</button>
        </p>
      </form>
    );
  }
}

export default Search2;
