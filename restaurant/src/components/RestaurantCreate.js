import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            address:null,
            rating:null,
        }
    }
    create() {
        fetch('http://localhost:3000/restaurant',{
            method: "Post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((resp) => {
                alert("Restaurant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <h1>Restaurant Create</h1>
                <input onChange={(event) => {this.setState({ name: event.target.value })}}
                placeholder="Name" /><br/><br/>
                <input onChange={(event) => {this.setState({ email: event.target.value })}}
                placeholder="Email" /><br/><br/>
                <input onChange={(event) => {this.setState({ rating: event.target.value })}}
                placeholder="Rating" /><br/><br/>
                <input onChange={(event) => {this.setState({ address: event.target.value })}}
                placeholder="Address" /><br/><br/>
                <button onClick={() =>{this.create()}}>Add Restaurant</button>
            </div>
        );
    }
}

export default RestaurantCreate;