import React, { Component } from 'react'

export class Button extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             status: true
        }
    }

    changeStatus(){
        this.setState(prevState => ({
            status: !prevState.status
        }))
    }
    
    render() {
        return (
            <div>
                <button className="Button" onClick={()=>this.changeStatus()}> {this.state.status?"ON": "OFF"}</button>
            </div>
        )
    }
}

export default Button
