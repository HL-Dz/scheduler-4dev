import { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TaskController from "../components/TaskController/TaskController";
import ControllerNavigaion from "../components/ControllerNavigaion/ControllerNavigaion";

const TasksPage = () => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="tasks-page">
      {/*  */}
      <div className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="header__left">
              <div className="header__buttons">
                <Button
                  type="primary"
                  style={{
                    background: "white",
                    color: "#1e252b",
                    fontFamily: "Montserrat",
                  }}
                  size="large"
                  icon={<PlusCircleOutlined />}
                >
                  Новая задача
                </Button>
              </div>
            </div>
            <div className="header__right">
              <div className="avatar">
                <div className="avatar__pic"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

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
