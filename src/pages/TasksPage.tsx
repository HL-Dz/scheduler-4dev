import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import TaskController from "../components/AuthForm/TaskController/TaskController";

const TasksPage = () => {
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
            <TaskController controllerStatus={0} />
            <TaskController controllerStatus={1} />
            <TaskController controllerStatus={2} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default TasksPage;
