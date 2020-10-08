import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(` Hello  ${this.state.ParentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent clickHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent
