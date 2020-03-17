import React, { Component } from "react";
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
import Sider from "./components/Sider";

function Home(props) {
  console.log("Home=>", props);
  return <h2>Home</h2>;
}

function About(props) {
  console.log("About=>", props);
  return <h2>About</h2>;
}

function Users(props) {
  console.log("Users=>", props);
  return <h2>Users</h2>;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Sider></Sider>
        <Switch>
          <Route path={"/"}>
            <Home />
          </Route>
          <Route path={"/react"}>
            <About />
          </Route>
          <Route path={"/vue"} children={<Users />} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.querySelector("#root")
);
