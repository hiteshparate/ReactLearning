import React from 'react';

import './App.css'
// import Greetings from './components/Greetings';
// import MyClock from './components/MyClock';
// import Button from './components/Button';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import { FormforList } from './components/FormforList';
// import Lists from './components/Lists';
// import LoginControl from './components/LoginControl';
// import StyleSheet from './components/StyleSheet';
// import Form from './components/Form';
import LifeCycleA from './components/LifeCycleA';
import LifeCycleB from './components/LifeCycleB';

function App() {
    
    return (<div className="container" >
        <header className="App-header" >
            {/* <Lists > </Lists> */}
            { /* <LoginControl></LoginControl> */}
            {/* <StyleSheet primary={true}> </StyleSheet> */}
            {/* <Form> </Form>   */}
            {/* <LifeCycleA></LifeCycleA> */}
            <LifeCycleB></LifeCycleB>
        </header>


    </div>
    );
}

export default App;