// Overview.js
// shows a list of tasks

import React, { Component } from "react";

const Overview = (props) => {
  const totalTasksDescription =  "Total number of tasks: " + props.totalTasks;

  function handleDeleteTask(id) {
    const newList = props.tasks.filter((task) => task.id !== id);
    props.setTasks(newList);
  }

  return (
    <div>
      {totalTasksDescription}
      <ul>
        {props.tasks.map((task) => {
          return(
            <li key={task.id}>
              <span>
                {task.text}
              </span>
              {/* <span> 
                <button onClick={handleDeleteTask(task.id)}>
                  {"Delete"}
                </button>
              </span> */}
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Overview;