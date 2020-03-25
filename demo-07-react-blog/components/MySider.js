import { Menu, Layout } from "antd";
import Router from "next/router";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  HomeFilled
} from "@ant-design/icons";
const { SubMenu } = Menu;
const { Sider } = Layout;

const MySider = () => (
  <Sider className="site-layout-background" width={200}>
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      style={{ height: "100%" }}
    >
      <Menu.Item key="1" onClick={() => Router.push("/")}>
        <HomeFilled />
        Home
      </Menu.Item>
      <Menu.Item key="2">
        {" "}
        <NotificationOutlined />
        option2
      </Menu.Item>
      <Menu.Item key="3">
        {" "}
        <NotificationOutlined />
        option3
      </Menu.Item>
      <Menu.Item key="4">
        {" "}
        <NotificationOutlined />
        option4
      </Menu.Item>

      <SubMenu
        key="sub2"
        title={
          <span>
            <LaptopOutlined />
            subnav 2
          </span>
        }
      >
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <NotificationOutlined />
            subnav 3
          </span>
        }
      >
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <SubMenu key="sub4" title="Submenu4">
          <Menu.Item key="12">Option 12</Menu.Item>
          <Menu.Item key="13">Option 13</Menu.Item>
        </SubMenu>
      </SubMenu>
    </Menu>
  </Sider>
);

export default MySider;
