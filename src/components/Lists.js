import React, { Component } from 'react'

export class Lists extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            lists: ['asd','asdn', 'asdia', 'asnu'],
        }
        this.addList = this.addList.bind(this)

    }

    addList = (props,e) => {
        this.setState({
            lists: this.state.lists.push(props)

        })
    }


    render() {
        let element = this.state.lists.map((list,index)=><li key={index}>{list}</li>);
        return (
            <div>
               {element}
                <input type="text" placeholder="Add To do here" className="form-input" name="todo"></input>
                <button onClick={(e) => this.addList('React',e)}>Add</button>
            </div>
        )
    }
}

export default Lists
