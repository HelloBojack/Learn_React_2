import { Layout, Breadcrumb } from "antd";
const { Content } = Layout;

import MySider from "./MySider";
import MyCardList from "./MyCardList";
import React, { useContext } from 'react';
import ReactDOM from "react-dom";

const MyContent = () => {
  return (
    <Content style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
        <MySider></MySider>
        <Content style={{ padding: "0 24px", minHeight: 500 }}>
          <MyCardList></MyCardList>
        </Content>
      </Layout>
    </Content>
  )
}
export default MyContent;
