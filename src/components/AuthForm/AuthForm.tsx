import React, { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./auth-form.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { initialApp } from "../../store/authSlice";

const AuthForm = () => {
  const dispatch = useAppDispatch();
  // const token = useAppSelector((state) => state.auth.token);
  const onFinish = (values: any) => {
    console.log(values);
    // @ts-ignore
    dispatch(initialApp(values));
  };

  // useEffect(() => {
  //   console.log(token);
  // }, [token]);

  return (
    <div className="auth-form">
      <div className="auth-form__title">Авторизация</div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="login"
          rules={[{ required: true, message: "Введите логин!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Введите пароль" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button login-btn"
            size="large"
          >
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AuthForm;
