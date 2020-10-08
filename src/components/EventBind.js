import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }
    }
    sayGoodBye = ()=>{
        this.setState( {
            message : "Good Bye"
        });
    }
    render() {
        return (
            <div>
                <p> {this.state.message}</p>
                <button onClick={this.sayGoodBye}> Click</button>
            </div>
        )
    }
}

export default EventBind
