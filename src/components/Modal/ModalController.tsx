import React, { useEffect, useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select } from "antd";
import SelectControl from "../FormControllers/SelectControl";
import { authors, duplAuthors } from "../../mockData/authors";
import TextAreaControl from "../FormControllers/TextAreaControl";
import { priority, status } from "../../mockData/tasks";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  addSelectedTask,
  createTask,
  resetSelectedTask,
  setModalType,
} from "../../store/tasksSlice";
const { TextArea } = Input;

const ModalController = () => {
  const dispatch = useAppDispatch();
  const modalType = useAppSelector((state) => state.tasks.modalType);
  const selectedTask = useAppSelector((state) => state.tasks.selectedTask);
  let isActive = modalType === "new_task" || modalType === "update_task";
  let newTaskElem = modalType === "new_task";
  const [form] = Form.useForm();

  const handleCancel = () => {
    dispatch(resetSelectedTask());
    dispatch(setModalType(null));
    form.resetFields();
  };

  const onFinish = (values: any) => {
    let time = moment();
    values["creation_time"] = time.format("YYYY-MM-DDThh:mm:ss");
    if (modalType === "new_task") {
      // @ts-ignore
      // dispatch(createTask(values));
      // handleCancel();
      console.log(values);
    } else if (modalType === "update_task") {
      // handleCancel();
      console.log(values);
    }
  };

  let task111 = {
    id: "010",
    status: 0,
    priority: 1,
    title: "Design email templates",
    description: "Create visually appealing email templates for the website",
    schedule: {
      creation_time: "2021-08-01T09:15:00",
    },
    author_name: "Emma Anderson",
  };

  return (
    <Modal
      title={modalType === "new_task" ? "Новая задача" : selectedTask?.title}
      open={isActive}
      width={450}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        name="new_task_form"
        className="login-form"
        // initialValues={{ remember: true }}
        initialValues={newTaskElem ? task111 : {}}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="title"
          rules={[
            {
              required: true,
              message: "Введите заголовок задания!",
            },
          ]}
          // className={newTaskElem ? "" : "hedden-el"}
        >
          <>
            <div>Название</div>
            <Input
              placeholder="Название"
              size="middle"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                form.setFieldValue("title", e.target.value);
                form.validateFields();
              }}
              // defaultValue={modalType === "update_task" ? titleVal : ""}
              defaultValue={newTaskElem ? task111.title : ""}
            />
          </>
        </Form.Item>
        {/* <Form.Item
          name="author_name"
          rules={[
            { required: newTaskElem && true, message: "Назначьте исполнителя" },
          ]}
        >
          <>
            <div>Исполниель</div>
            {<div>{selectedTask?.author_name}</div>}
            <Select
              style={{ width: "100%" }}
              placeholder={"Выберите исполнителя"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("author_name", value);
                form.validateFields();
              }}
              options={duplAuthors}
              // className={newTaskElem ? "" : "hedden-el"}
            />
          </>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            { required: newTaskElem && true, message: "Опишите задание" },
          ]}
        >
          <>
            <div>Описание задачи</div>
            {!newTaskElem && <div>{selectedTask?.description}</div>}
            <TextArea
              showCount
              maxLength={300}
              style={{ height: 120, resize: "none" }}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                form.setFieldValue("description", e.target.value);
                form.validateFields();
              }}
              placeholder={"Опишите задачу"}
              // className={newTaskElem ? "" : "hedden-el"}
            />
          </>
        </Form.Item>
        <Form.Item
          name="status"
          rules={[
            {
              required: true,
              message: "Назначьте состояние",
            },
          ]}
        >
          <>
            <div>Состяние</div>
            <Select
              style={{ width: "100%" }}
              placeholder={"Назначьте статус"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("status", value);
                form.validateFields();
              }}
              options={status}
            />
          </>
        </Form.Item>
        <Form.Item
          name="priority"
          rules={[{ required: true, message: "Назначьте приоритет" }]}
        >
          <>
            <div>Приоритет</div>
            <Select
              style={{ width: "100%" }}
              placeholder={"Назначьте приоритет"}
              optionFilterProp="children"
              onChange={(value) => {
                form.setFieldValue("priority", value);
                form.validateFields();
              }}
              options={priority}
            />
          </>
        </Form.Item> */}
        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "50px",
            }}
          >
            <Button
              type="default"
              className="login-form-button"
              size="middle"
              onClick={handleCancel}
            >
              Отмена
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              size="middle"
              style={{ marginLeft: "20px" }}
            >
              Сохранить
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalController;
