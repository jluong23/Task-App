// Overview.js
// shows a list of tasks

import React, { Component } from "react";

const Overview = (props) => {
  const totalTasksDescription =  "Total number of tasks: " + props.totalTasks;

  function handleDeleteTask(id) {
    const newList = props.tasks.filter((task) => task.id !== id);
    props.setTasks(newList);
  }

  function handleEditTask(id, e) {
    const newList = props.tasks.map((task) => {
      if(task.id === id){
        return {text: task.text, id: task.id, edit: !task.edit};
      }
      return task;
    });
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
                {task.edit ? <input type="text" /> : task.text}
              </span>
              <span> 
                <button onClick={() => handleDeleteTask(task.id)}>
                  {"Delete"}
                </button>
              </span>
              <span> 
                <button onClick={(e) => handleEditTask(task.id, e)}>
                  {task.edit ? "Save" : "Edit"}
                </button>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Overview;