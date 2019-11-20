import React, { Component } from 'react';
import './App.css';
import tasks from './sample/tasks.json';

class App extends Component{

  state = {
    tasks: tasks,
  }

  render () {
    return <div>
      <h1>Hello World!</h1>
      { this.state.tasks.map( e => <h2> {e.title} </h2>) }
    </div>
  }
}

export default App;
