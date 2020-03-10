import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";

import "antd/dist/antd.css";
import { Layout, List } from "antd";
const { Content } = Layout;

export default class Index extends Component {
  state = {
    dataList: [
      {
        text: "Learn React",
        uid: "1"
      },
      {
        text: "Learn Vue",
        uid: "2"
      }
    ]
  };
  componentDidMount() {
    console.log(this.props.history);

    this.props.history.push({
      pathname: "/home",
      state: {}
    });
  }

  render() {
    return (
      <Fragment>
        {/* <Redirect to="/home"></Redirect> */}
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div style={{ padding: "0 24px" }}>
            <List
              style={{ marginTop: 20, width: 310 }}
              size="small"
              bordered
              dataSource={this.state.dataList}
              renderItem={(item, index) => (
                <List.Item>
                  <Link to={"/list" + item.uid}>{item.text}</Link>
                </List.Item>
              )}
            />
          </div>
        </Content>
      </Fragment>
    );
  }
}
