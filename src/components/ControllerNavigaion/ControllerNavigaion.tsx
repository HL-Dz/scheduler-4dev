import React from "react";
import {
  DatabaseOutlined,
  ControlOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const ControllerNavigaion = ({
  isActive,
  setIsActive,
}: {
  isActive: number;
  setIsActive: (num: number) => void;
}) => {
  return (
    <div className="controller-navigation">
      <div
        className={`${isActive === 0 ? "item_active " : ""}item`}
        onClick={() => setIsActive(0)}
      >
        <div className="item__text">В очереди</div>
        <div className="item__icon">
          <DatabaseOutlined style={{ color: "#bf99e9" }} />
        </div>
      </div>
      <div
        className={`${isActive === 1 ? "item_active " : ""}item`}
        onClick={() => setIsActive(1)}
      >
        <div className="item__text">В работе</div>
        <div className="item__icon">
          <ControlOutlined style={{ color: "#f1f130" }} />
        </div>
      </div>
      <div
        className={`${isActive === 2 ? "item_active " : ""}item`}
        onClick={() => setIsActive(2)}
      >
        <div className="item__text">Выполнено</div>
        <div className="item__icon">
          <CheckCircleOutlined style={{ color: "#77e577" }} />
        </div>
      </div>
    </div>
  );
};

export default ControllerNavigaion;
