import { Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <div className="error-box">
        <div className="error-box__title">
          Ошибка доступа{" "}
          <WarningOutlined
            style={{ color: "#dd6868", fontSize: "35px", marginLeft: "15px" }}
          />
        </div>
        <div className="error-box__content">
          <div className="error-box__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio non
            quam aut eum tempore alias. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Optio non quam aut eum tempore alias.
          </div>
          <Button type="primary" className="error-box__btn" size="large">
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
