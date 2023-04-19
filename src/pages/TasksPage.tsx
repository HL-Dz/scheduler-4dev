import { useState } from "react";
import TaskController from "../components/TaskController/TaskController";
import ControllerNavigaion from "../components/ControllerNavigaion/ControllerNavigaion";
import TaskHeader from "../components/TaskHeader/TaskHeader";

const TasksPage = () => {
  const [isActive, setIsActive] = useState(0);
  return (
    <div className="tasks-page">
      <TaskHeader />
      <main className="main-content">
        <div className="container">
          <div className="tasks-box">
            <ControllerNavigaion
              isActive={isActive}
              setIsActive={setIsActive}
            />
            <TaskController controllerStatus={0} isActive={isActive} />
            <TaskController controllerStatus={1} isActive={isActive} />
            <TaskController controllerStatus={2} isActive={isActive} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TasksPage;
