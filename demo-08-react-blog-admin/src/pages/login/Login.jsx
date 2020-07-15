import React, { useEffect } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Redirect } from 'react-router-dom'
import { LoginIn } from '../../api/api'
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import './Login.css'

function Login(props) {
  const { history } = props;
  const [form] = Form.useForm();

  useEffect(() => {
    const user = storageUtils.getUser()
    if (user && user._id) {
      memoryUtils.user = user
    }
    if (memoryUtils.user && memoryUtils.user._id) {
      history.replace("/");
    }
  }, []);

  const onFinish = async (values) => {
    let result = await LoginIn(values)
    if (result.result) {
      message.success('登录成功！');
      // 不需要后退使用replace
      const user = result.data
      storageUtils.saveUser(user)
      memoryUtils.user = user

      history.replace("/");
    }
    else {
      message.error('登录失败！');
    }
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
    message.error('登录失败！');
  };

  return <>
    <Form
      form={form}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
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
        <Button type="primary" htmlType="submit" className="login-form-button"
        // onClick={() => { onCheck() }}
        >
          登录
        </Button>
        {/* Or <a href="">register now!</a> */}
      </Form.Item>
    </Form>
  </>
}

export default Login
