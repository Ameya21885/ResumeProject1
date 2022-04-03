import * as React from "react";

// Class Components

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Peter",
      email: "peter@test.com",
      count: 0,
    };
  }

  updateState() {
    this.setState({
      name: "Bruce",
      count: this.state.count + 1,
    });
  }

  render() {
    console.log("render");
    return (
      <>
        <div>
          <h3>Hello State</h3>
          <h4>{this.state.name}</h4>
          <h4>{this.state.email}</h4>
          <h4>Count: {this.state.count}</h4>

          <button
            onClick={() => {
              this.updateState();
            }}
          >
            Update Name
          </button>
        </div>
      </>
    );
  }
}
