import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Aksi untuk menambah task baru
    addTask: (state, action) => {
      const newTask = {
        // action.payload akan berisi teks dari task
        id: Date.now(), // ID unik sederhana
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    
    // Aksi untuk menghapus task
    deleteTask: (state, action) => {
      // action.payload akan berisi id dari task
      state.tasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
    },
    
    // Aksi untuk menandai task selesai/belum
    toggleTask: (state, action) => {
      // action.payload akan berisi id dari task
      const task = state.tasks.find(
        (task) => task.id === action.payload
      );
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

// Ekspor aksinya
export const { addTask, deleteTask, toggleTask } = tasksSlice.actions;

// Ekspor reducernya
export default tasksSlice.reducer;