import { useEffect, useState } from "react";
import TaskController from "../components/TaskController/TaskController";
import ControllerNavigaion from "../components/ControllerNavigaion/ControllerNavigaion";
import TaskHeader from "../components/TaskHeader/TaskHeader";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getTasks } from "../store/tasksSlice";
import ModalController from "../components/Modal/ModalController";
import ModalForNewTask from "../components/Modal/ModalForNewTask";
import ModalForUpdateTask from "../components/Modal/ModalForUpdateTask";
import { Navigate } from "react-router-dom";

const TasksPage = () => {
  const [isActive, setIsActive] = useState(0);
  const tasks = useAppSelector((state) => state.tasks.list);
  const selectedTask = useAppSelector((state) => state.tasks.selectedTask);
  const token = useAppSelector((state) => state.auth.token);
  const modalType = useAppSelector((state) => state.tasks.modalType);
  const dispath = useAppDispatch();

  useEffect(() => {
    dispath(getTasks());
  }, [tasks]);

  if (!token) {
    return <Navigate replace to="/error" />;
  }

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
            <TaskController
              tasks={tasks}
              controllerStatus={0}
              isActive={isActive}
            />
            <TaskController
              tasks={tasks}
              controllerStatus={1}
              isActive={isActive}
            />
            <TaskController
              tasks={tasks}
              controllerStatus={2}
              isActive={isActive}
            />
          </div>
        </div>
      </main>
      {/* <ModalController /> */}
      {modalType === "new_task" && <ModalForNewTask modalType={modalType} />}
      {modalType === "update_task" && (
        <ModalForUpdateTask modalType={modalType} selectedTask={selectedTask} />
      )}
    </div>
  );
};

export default TasksPage;
