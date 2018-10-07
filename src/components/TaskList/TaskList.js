import React, { Component } from "react";
import TaskItem from "../TaskItem/TaskItem";

export default class TaskList extends Component {
  render() {
    const { taskList, isAdmin, handleTaskUpdate } = this.props;
    return (
      <div>
        {taskList.map(task => (
          <TaskItem
            task={task}
            key={task.id}
            isAdmin={isAdmin}
            handleTaskUpdate={handleTaskUpdate}
          />
        ))}
      </div>
    );
  }
}
