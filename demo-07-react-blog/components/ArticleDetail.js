import { Layout, Breadcrumb } from "antd";
import { withRouter } from "next/router";
import ReactMarkdown from "react-markdown";
const { Content } = Layout;

import MySider from "./MySider";

let markdown =
  "# 这是标题\n" +
  "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
  "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
  "**这是加粗的文字**\n\n" +
  "*这是倾斜的文字*`\n\n" +
  "***这是斜体加粗的文字***\n\n" +
  "~~这是加删除线的文字~~ \n\n" +
  "`console.log(Hello World)` \n\n" +
  "```const a=2; ```";

const MyContent = withRouter(props => (
  <Content style={{ padding: "0 50px" }}>
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
    <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
      <MySider></MySider>
      <Content style={{ padding: "0 24px", minHeight: 500 }}>
        <ReactMarkdown source={markdown} escapeHtml={false}></ReactMarkdown>

        <div>id={props.router.query.id}</div>
      </Content>
    </Layout>
  </Content>
));
export default MyContent;
