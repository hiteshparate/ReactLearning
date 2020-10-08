import React, { Component } from 'react'

export class Lists extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             lists: ['hi','bye','try'],
        }
        this.addList = this.addList.bind(this)
        this.showList = this.showList.bind(this)
    }

    addList = (props)=>{
        this.setState({
            lists : this.state.lists.push(props)
        })
    }
    showList =()=>{
        this.state.lists.map((item)=>
        <li>{item}</li>
        )
    }
    
    render() {
        return (
            <div>

               {this.showList()}
                <input type="text" placeholder="Add To do here" className="form-input" name="todo"></input>
                <button onClick={()=>this.addList('React')}>Add</button>
            </div>
        )
    }
}

export default Lists
