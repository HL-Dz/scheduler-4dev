import React, { FC } from "react";
import { ITask } from "../../mockData/tasks";
import { useAppDispatch } from "../../hooks/hooks";
import { addSelectedTask, setModalType } from "../../store/tasksSlice";

type IProps = {
  controllerStatus: 0 | 1 | 2;
  isActive: number;
  tasks: ITask[];
};

const statuses = ["В очереди", "В работе", "Выполнено"];

const TaskController: FC<IProps> = ({ controllerStatus, isActive, tasks }) => {
  const dispatch = useAppDispatch();
  const filterStatus = () => {
    return tasks.filter((el) => el?.status === controllerStatus);
  };

  const cls = controllerStatus === isActive ? "task-controller_active" : "";
  return (
    <div className={"task-controller " + cls}>
      <div className="task-controller__title">{statuses[controllerStatus]}</div>
      <ul className="task-list">
        {filterStatus().map((el) => {
          const cls =
            el.priority === 1
              ? "task__priority_medium"
              : el.priority === 2
              ? "task__priority_high"
              : "";
          return (
            <li
              className="task"
              key={el.id}
              onClick={() => {
                dispatch(addSelectedTask(el));
                dispatch(setModalType("update_task"));
              }}
            >
              <div className="task__header">
                <div className={"task__priority " + cls}></div>
                <div className="task__title">{el.title}</div>
              </div>
              <div className="task__executor">{el.author_name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskController;
