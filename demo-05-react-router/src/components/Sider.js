import React from "react";
import { Link } from "react-router-dom";
import { Menu, Button } from "antd";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined
} from "@ant-design/icons";

export default class Sider extends React.Component {
  render() {
    return (
      <div
        style={{
          width: 256,
          height: "1000px",
          background:'#001529',
          float: "left"
        }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1">
            <PieChartOutlined />
            <span>
              <Link to="/home">
                Home
              </Link>
            </span>
          </Menu.Item>
          <Menu.Item key="2">
            <DesktopOutlined />
            <span>
              <Link to="/react">React</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="3">
            <InboxOutlined />
            <span>
              <Link to="/vue">Vue</Link>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
