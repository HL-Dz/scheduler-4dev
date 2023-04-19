import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const TasksPage = () => {
  return (
    <div className="tasks-page">
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
    </div>
  );
};

export default TasksPage;
