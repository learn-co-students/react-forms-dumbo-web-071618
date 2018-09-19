// Code ControlledInput Component Here
import React, { Component } from 'react'

class ControlledInput extends Component {
    state = {
        firstName: "John",
        lastName: "Henry"
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" onChange={(e) => this.handleChange(e)} value={this.state.firstName} />
                <input type="text" name="lastName" onChange={(e) => this.handleChange(e)} value={this.state.lastName} />
            </form>
        )
    }
}

export default ControlledInput