import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/tasksSlice";
import classes from "./TaskList.module.css"; // Tetap pakai CSS Module
import clsx from "clsx";
// Import Icon component yang sudah ada di proyek
import Icon from "./Icon"; 

function TaskList() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className={classes.list}>
      {tasks.length === 0 ? (
        <p className={classes.empty}>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className={clsx(
              classes.item,
              task.completed && classes.completed // Tetap gunakan ini
            )}
          >
            <button
              className={classes.checkButton}
              onClick={() => dispatch(toggleTask(task.id))}
            >
              <Icon name="check_circle" size={24} /> 
            </button>
            <span 
              className={classes.taskText} 
              onClick={() => dispatch(toggleTask(task.id))}
            >
              {task.text}
            </span>
            <div className={classes.rightSection}>
              <span className={classes.pomoCounter}>0 / 1</span> 
              <button 
                className={classes.menuButton} 
                onClick={() => alert(`Menu for task ${task.id}`)}
              >
                <Icon name="more_vert" size={24} />
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;