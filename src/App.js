import Header from "./components/Header";
import classes from "./App.module.css";
import Timer from "./components/Timer";
import { useSelector } from "react-redux";
import clsx from "clsx";
import TaskArea from "./components/TaskArea";

function App() {
  const mode = useSelector((state) => state.timer.mode);

  return (
    <div className={clsx(classes.container, classes[mode])}>
      <Header />
      <div className={classes.content}>
        <Timer />
        <TaskArea />
      </div>
    </div>
  );
}

export default App;
