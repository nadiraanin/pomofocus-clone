import React, { useState } from "react";
import classes from "./TaskArea.module.css";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Icon from "./Icon"; // Impor Icon

function TaskArea() {
  // State untuk mengontrol visibilitas form
  const [showForm, setShowForm] = useState(false);

  return (
    <div className={classes.taskContainer}>
      <div className={classes.header}>
        <h3 className={classes.title}>Tasks</h3>
        <button className={classes.headerMenuButton}>
          <Icon name="more_vert" size={24} />
        </button>
      </div>
      <hr className={classes.divider} />
      <TaskList />
      {showForm && <TaskForm onClose={() => setShowForm(false)} /> }
      {!showForm && (
        <button
          className={classes.addTaskButton}
          onClick={() => setShowForm(true)}
        >
          <Icon name="add_circle" size={20} />
          <span>Add Task</span>
        </button>
      )}
    </div>
  );
}

export default TaskArea;