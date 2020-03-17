import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Menu, Button } from "antd";
import "antd/dist/antd.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  InboxOutlined
} from "@ant-design/icons";
import TopMenu from "./components/TopMenu";

function Home(props) {
  console.log("Home=>", props);
  return <h2>Home</h2>;
}

function About(props) {
  console.log("About=>", props);
  return (
    <div style={{ float: "left" }}>
      <TopMenu></TopMenu>
    </div>
  );
}

function Users(props) {
  console.log("Users=>", props);
  return <h2>Users</h2>;
}

function App() {
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        style={{
          width: 256,
          height: "1000px",
          background: "#001529",
          float: "left"
        }}
      >
        <Menu.Item key="1">
          <PieChartOutlined />
          <Link to={"/"}>Home</Link>
        </Menu.Item>

        <Menu.Item key="2">
          <DesktopOutlined />
          <Link to={"/about"}>About</Link>
        </Menu.Item>

        <Menu.Item key="3">
          <InboxOutlined />
          <Link to={"/users"}>Users</Link>
        </Menu.Item>
      </Menu>
      {/* <Switch>通过查找所有的子<Route>并渲染与当前URL匹配的第一个<Route>的内容 */}
      <Switch>
        <Route path={"/about"}>
          <About />
        </Route>
        <Route path={"/users"} children={<Users />} />
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
