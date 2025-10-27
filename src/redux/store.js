import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";
import tasksReducer from "./tasksSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
    tasks: tasksReducer,
  },
});

export default store;
