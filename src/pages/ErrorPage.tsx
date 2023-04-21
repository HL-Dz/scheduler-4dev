import { Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/hooks";
import { resetError } from "../store/authSlice";
const ErrorPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const goToMainPage = () => {
    dispatch(resetError());
    navigate("/");
  };

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
          <Button
            type="primary"
            htmlType="button"
            className="error-box__btn"
            size="large"
            onClick={() => {
              goToMainPage();
            }}
          >
            Назад
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
