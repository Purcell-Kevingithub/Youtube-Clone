import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="searchcontainer">
        <div className="ui grid mobile only">
          <div className="ui row align" style={{ marginTop: "1em" }}>
            <div
              className="nine wide mobile column right aligned"
              style={{ textAlign: "left", paddingLeft: "30px" }}
            >
              <a href="/">
                <span>
                  <i
                    className="fa fa-2x fa-youtube-play"
                    aria-hidden="true"
                    style={{ color: "red", paddingLeft: "5px" }}
                  ></i>
                </span>
                <span className="youtube">YouTube</span>
              </a>
            </div>
            <div
              className="six wide mobile column"
              style={{ textAlign: "right", paddingLeft: "0px" }}
            >
              <i
                className="fa fa-2x fa-user-circle-o"
                aria-hidden="true"
                style={{ color: "#5c6bc0" }}
              ></i>
            </div>
          </div>
          <div className="ui centered row">
            <div
              className="thirteen wide mobile column"
              style={{ textAlign: "left" }}
            >
              <form onSubmit={this.onFormSubmit} style={{ lineHeight: "10px" }}>
                <input
                  type="text"
                  value={this.state.term}
                  placeholder="Search"
                  autoComplete="off"
                  onChange={this.onInputChange}
                  data-variation="inverted"
                />
                <button
                  data-tooltip="Search"
                  data-position="bottom right"
                  data-variation="tiny"
                >
                  <i className="fa fa-search fa-sm" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="ui grid tablet computer only">
          <div className="ui row align">
            <div className="four wide mobile column">
              <a href="/">
                <span>
                  <i
                    className="fa fa-2x fa-youtube-play"
                    aria-hidden="true"
                    style={{ color: "red", paddingLeft: "20px" }}
                  ></i>
                </span>
                <span className="youtube">YouTube</span>
              </a>
            </div>
            <div
              className="five wide mobile column centered"
              style={{ textAlign: "left" }}
            >
              <form onSubmit={this.onFormSubmit}>
                <input
                  type="text"
                  value={this.state.term}
                  placeholder="Search"
                  autoComplete="off"
                  onChange={this.onInputChange}
                  data-variation="inverted"
                />
                <button
                  data-tooltip="Search"
                  data-position="bottom right"
                  data-variation="tiny"
                >
                  <i className="fa fa-search fa-sm" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div
              className="one wide mobile column four wide computer column three wide tablet column"
              style={{ textAlign: "right", paddingRight: "30px" }}
            >
              <i
                className="fa fa-2x fa-user-circle-o"
                aria-hidden="true"
                style={{ color: "#5c6bc0" }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;

// id="ytSearchButton" button
