import React, { Component } from 'react'


export class Greetings extends Component {
    // formatName(props){
    //     return this.props.firstName + " " + this.props.lastName;
    // }


    Greet() {
        if (this.props.firstName && this.props.lastName) {
            return <h1> Hello, {this.props.firstName} {this.props.lastName}</h1>
        }
        else {
            return <h1> Hello, Stranger</h1>
        }
    }

    render() {
        return (
            <div>
                {this.Greet()}

            </div>
        )
    }
}

export default Greetings
