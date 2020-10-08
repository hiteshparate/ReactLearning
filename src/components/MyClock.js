import React, { Component } from 'react'
import Clock from 'react-clock'

export class MyClock extends Component {
    constructor(props){
        super(props);
        this.state={
           time : new Date().toLocaleTimeString(),
           date : new Date().toLocaleDateString(),
           ck: new Date()
    
        }
        }

        tick(){
            this.setState({
               date: new Date().toLocaleDateString(),
               time : new Date().toLocaleTimeString()
            });
        }
        componentWillUnmount(){
            clearInterval(this.intervalID)
        }
       componentDidMount(){
           this.intervalID = setInterval(
               ()=> this.tick(),1000
           );
       }
    
    render() {
        return (
            <div>
                <h1> Time is now {this.state.time}</h1>
                <Clock value={this.state.ck}></Clock>
            </div>
            
        )
        
    }
    
}


export default MyClock
