import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import SelectControl from "../FormControllers/SelectControl";
import { authors, duplAuthors } from "../../mockData/authors";
import TextAreaControl from "../FormControllers/TextAreaControl";
import { priority, status } from "../../mockData/tasks";

const TaskHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const [form] = Form.useForm();

  const onFinish = (value: any) => {
    console.log("Данные", value);
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
                  onClick={showModal}
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
      <Modal
        title="Новая задача"
        open={isModalOpen}
        width={450}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          name="new_task_form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            name="title"
            rules={[{ required: true, message: "Введите имя!" }]}
          >
            <>
              <span>Название</span>
              <Input
                placeholder="Название"
                size="middle"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  form.setFieldValue("title", e.target.value);
                  form.validateFields();
                }}
              />
            </>
          </Form.Item>
          <Form.Item
            name="executor"
            rules={[{ required: true, message: "Назначьте исполнителя" }]}
          >
            <>
              <span>Исполниель</span>
              <SelectControl
                options={duplAuthors}
                selectType="authors"
                placeholder="Выберите исполнителя"
                setField={(value) => {
                  form.setFieldValue("executor", value);
                  form.validateFields();
                }}
              />
            </>
          </Form.Item>
          <Form.Item
            name="description"
            rules={[{ required: true, message: "Опишите задание" }]}
          >
            <>
              <span>Описание задачи</span>
              <TextAreaControl
                placeholder="Опишите задачу"
                setField={(value) => {
                  form.setFieldValue("description", value);
                  form.validateFields();
                }}
              />
            </>
          </Form.Item>
          <Form.Item
            name="state"
            rules={[{ required: true, message: "Опишите состояние" }]}
          >
            <>
              <span>Состяние</span>
              <SelectControl
                options={status}
                selectType="state"
                placeholder="Назначьте статус"
                setField={(value) => {
                  form.setFieldValue("state", value);
                  form.validateFields();
                }}
              />
            </>
          </Form.Item>
          <Form.Item
            name="priority"
            rules={[{ required: true, message: "Назначьте приоритет" }]}
          >
            <>
              <span>Приоритет</span>
              <SelectControl
                options={priority}
                selectType="priority"
                placeholder="Назначить приоритет"
                setField={(value) => {
                  form.setFieldValue("priority", value);
                  form.validateFields();
                }}
              />
            </>
          </Form.Item>
          <Form.Item>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
    </>
  );
};

export default TaskHeader;
