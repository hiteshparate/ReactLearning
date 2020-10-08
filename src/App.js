import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import MyClock  from './components/MyClock';
import Button from './components/Button';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import { FormforList } from './components/FormforList';
import Lists from './components/Lists';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greetings firstName="Hitesh" lastName="Parate"></Greetings>
        <Greetings></Greetings>

        <MyClock></MyClock> */}
        {/* <FunctionClock></FunctionClock> */}
      {/* <Button></Button> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <FormforList></FormforList> */}
      <Lists></Lists>
      </header>
    </div>
  );
}

export default App;
