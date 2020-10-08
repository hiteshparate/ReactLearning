import React, { Component } from 'react'

export class childComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(props) {
        return (
            <div>
                   <button onClick={()=> this.props.clickHandler('child')}> click me!</button>
            </div>
        )
    }
}

export default childComponent
