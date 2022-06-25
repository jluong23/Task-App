// App.js

import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor(){
    super();
    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
      numTasks: 0,
    };
  }

  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      },
      numTasks: this.state.numTasks,
    });
  };
  
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      numTasks: this.state.numTasks + 1,
      task: {
        text: '',
        id: uniqid(), 
      },
    });
  };

  setTasks = (newTasks) => {
    this.setState({
      tasks: newTasks,
      numTasks: newTasks.length,
    });
  }
  
  render() {
    const {task, tasks, numTasks} = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <input onChange={this.handleChange} value={task.text} type="text" id="taskInput"/>
          <button type="submit">
            Add Task
          </button>
        </form>
        <Overview tasks = {tasks} totalTasks = {numTasks} setTasks = {this.setTasks}/>
      </div>
    );
  }
}

export default App;
