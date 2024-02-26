import { useAuth } from "context/auth-context";
import React from "react";
import { Button, Form, Input } from "antd";

export const LoginScreen = () => {
  const { login } = useAuth();

  const hanleSubmit = (values: { username: string; password: string }) => {
    login(values);
  };
  return (
    <Form onFinish={hanleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder="用户名" type="text" id="username" />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder="密码" type="text" id="password" />
      </Form.Item>
      <Form.Item>
        <Button htmlType={"submit"} type={"primary"}>
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};
