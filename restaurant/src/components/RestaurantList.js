import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        //console.warn(result)
        this.setState({ list: result });
      });
    });
  }
  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been Deleted");
        this.getData();
      });
    });
  }

  render() {
    return (
      <Container>
        <h1>Restaurant List</h1>
        {this.state.list ? (
          <div className="justify-content-center">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Rating</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to={"/update/" + item.id}>
                        <FontAwesomeIcon icon={faEdit} color="green" />{" "}
                      </Link>
                      <span onClick={() => this.delete(item.id)}>
                        <FontAwesomeIcon icon={faTrash} color="red" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait...</p>
        )}
      </Container>
    );
  }
}

export default RestaurantList;
