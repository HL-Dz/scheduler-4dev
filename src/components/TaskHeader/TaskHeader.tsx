import React, { useState } from "react";
import {
  PlusCircleOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import SelectControl from "../FormControllers/SelectControl";
import { authors, duplAuthors } from "../../mockData/authors";
import TextAreaControl from "../FormControllers/TextAreaControl";
import { priority, status } from "../../mockData/tasks";
import moment from "moment";
import { useAppDispatch } from "../../hooks/hooks";
import { setModalType } from "../../store/tasksSlice";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";

const TaskHeader = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const showNewModal = () => {
    dispatch(setModalType("new_task"));
  };

  const [isActiveLogout, setIsActiveLogout] = useState(false);
  return (
    <>
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
                  onClick={showNewModal}
                >
                  Новая задача
                </Button>
              </div>
            </div>
            <div
              className={`logout-overlay ${
                isActiveLogout ? "logout-overlay_active" : ""
              }`}
              onClick={() => {
                setIsActiveLogout(false);
              }}
            ></div>
            <div className="header__right">
              <div
                className={`logout ${isActiveLogout ? "logout_active" : ""}`}
              >
                <Button
                  type="default"
                  className="logout__btn"
                  onClick={async () => {
                    await dispatch(logout());
                    navigate("/");
                  }}
                >
                  <LoginOutlined
                    style={{
                      fontSize: "23px",
                      color: "#e93a3a",
                    }}
                  />
                  <span className="logout__text">Выйти</span>
                </Button>
              </div>
              <div
                className="avatar"
                onClick={() => setIsActiveLogout(!isActiveLogout)}
              >
                <div className="avatar__pic">
                  <UserOutlined
                    style={{ fontSize: "30px", color: "#3aad43" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskHeader;
