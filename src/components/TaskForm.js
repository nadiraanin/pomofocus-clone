import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";
import classes from "./TaskForm.module.css"; // Tetap pakai CSS Module

// Terima prop onClose
function TaskForm({ onClose }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null); // Ref untuk auto-focus

  // Auto focus saat form muncul
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTask(text)); // Kirim aksi 'addTask'
      setText("");
      onClose(); // Panggil onClose setelah save
    }
  };

  return (
    // Gunakan class baru untuk styling form yang expanded
    <form className={classes.formExpanded} onSubmit={handleSubmit}>
      <input
        ref={inputRef} // Tambahkan ref
        type="text"
        placeholder="What are you working on?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={classes.inputExpanded} // Class baru
      />
      <div className={classes.actions}>
        <button
          type="button"
          onClick={onClose} // Panggil onClose saat cancel
          className={classes.cancelButton} // Class baru
        >
          Cancel
        </button>
        <button
          type="submit"
          className={classes.saveButton} // Class baru
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default TaskForm;