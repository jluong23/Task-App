// Overview.js
// shows a list of tasks


import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const { tasks, totalTasks } = this.props;
    const totalTasksDescription =  "Total number of tasks: " + totalTasks;
    return (
      <div>
        {totalTasksDescription}
        <ul>
        {tasks.map((task) => {
          return <li key = {task.id}>{task.text}</li>;
        })}
        </ul>
      </div>



    );
  }
}

export default Overview;
