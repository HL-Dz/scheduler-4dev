import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import SelectControl from "../FormControllers/SelectControl";
import { authors, duplAuthors } from "../../mockData/authors";
import TextAreaControl from "../FormControllers/TextAreaControl";
import { priority, status } from "../../mockData/tasks";
import moment from "moment";
import { useAppDispatch } from "../../hooks/hooks";
import { setModalType } from "../../store/tasksSlice";

const TaskHeader = () => {
  const dispatch = useAppDispatch();
  const showNewModal = () => {
    dispatch(setModalType("new_task"));
  };
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
            <div className="header__right">
              <div className="avatar">
                <div className="avatar__pic"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskHeader;
