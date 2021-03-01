import React, { Component } from "react";

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      email: "",
      rating: "",
      address: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant/" + this.newMethod()).then(
      (response) => {
        response.json().then((result) => {
          this.setState({
            id: result.id,
            name: result.name,
            email: result.email,
            rating: result.rating,
            address: result.address,
          });
        });
      }
    );
  }
  newMethod() {
    return this.props.match.params.id;
  }
  update() {
    fetch("http://localhost:3000/restaurant/" + this.state.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been Updated");
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant Update</h1>
        <input
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
          placeholder="Name"
          value={this.state.name}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          placeholder="Email"
          value={this.state.email}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ rating: event.target.value });
          }}
          placeholder="Rating"
          value={this.state.rating}
        />
        <br />
        <br />
        <input
          onChange={(event) => {
            this.setState({ address: event.target.value });
          }}
          placeholder="Address"
          value={this.state.address}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.update();
          }}
        >
          Update Restaurant
        </button>
      </div>
    );
  }
}

export default RestaurantUpdate;
