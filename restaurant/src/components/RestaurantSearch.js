import React, { Component } from "react";
import { Table, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch: null,
    };
  }
  delete(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        alert("Restaurant has been Deleted");
        this.search(this.state.lastSearch);
      });
    });
  }
  search(key) {
    this.setState({ lastSearch: key });
    // eslint-disable-next-line eqeqeq
    if (key != "") {
      fetch("http://localhost:3000/restaurant?q=" + key).then((data) => {
        data.json().then((resp) => {
          console.warn("resp", resp);
          if (resp.length > 0) {
            this.setState({ searchData: resp, noData: false });
          } else {
            this.setState({ noData: true, searchData: null });
          }
        });
      });
    } else {
      this.setState({ searchData: null });
    }
  }

  render() {
    return (
      <Container>
        <h1>Restaurant Search</h1>
        <Form.Control
          type="text"
          onChange={(event) => this.search(event.target.value)}
          placeholder="Search Restaurants"
        />
        <div>
          {this.state.searchData ? (
            <div>
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
                  {this.state.searchData.map((item) => (
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
            ""
          )}
          {this.state.noData ? <h2>No Data Found</h2> : null}
        </div>
      </Container>
    );
  }
}

export default RestaurantSearch;
