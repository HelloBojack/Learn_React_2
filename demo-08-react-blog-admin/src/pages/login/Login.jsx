import React from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './Login.css'

import { LoginIn } from '../../api/api'

function Login(props) {
  const { history } = props;
  const [form] = Form.useForm();


  // form.validateFields(async (err, values) => {
  //   if (!err) { // 校验成功 
  //     // const { username, password } = values
  //     // console.log('提交登陆请求', username, password)
  //   } else { // 校验失败 
  //     console.log(err)
  //   }
  // })


  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      let result = await LoginIn(values)
      if (result.result) {
        message.success('登录成功！');
        history.push("/");
      }
      else {
        message.error('登录失败！');
      }
    } catch (errorInfo) {
      message.error('登录失败');
    }
  };

  return <>
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
    >
      <div className="login_title" >
        <span>登录你的账号</span>
      </div>

      <Form.Item
        name="username"
        rules={[
          { required: true, message: '请输入用户名' },
          { min: 4, message: '用户名需大于4位' },
          { max: 20, message: '用户名需小于20位' },
        ]}
      >
        <Input
          allowClear
          prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 4, message: '密码需大于4位' },
          { max: 20, message: '密码需小于20位' },
        ]}
      >
        <Input.Password
          allowClear
          autoComplete="true"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={() => { onCheck() }}>
          登录
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  </>
}

export default Login
