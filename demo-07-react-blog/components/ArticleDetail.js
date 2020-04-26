import { Layout, Breadcrumb } from "antd";
import { withRouter } from "next/router";
import ReactMarkdown from "react-markdown";
const { Content } = Layout;
import React, { useContext } from 'react';
import { ArticleContent } from '../pages/detail'
import marked from 'marked'
import hljs from 'highlight.js'

import MySider from "./MySider";

const MyContent = withRouter(props => {
  const AContent = useContext(ArticleContent);

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    highlight: function (code) {
      console.log(code)
      return hljs.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  })


  let html = marked(AContent.content)
  // console.log(html)

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
          {/* <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
          <div dangerouslySetInnerHTML={{ __html: marked(AContent.content, { renderer: renderer }) }}></div>
          {/* <ReactMarkdown source={AContent.content} escapeHtml={false}></ReactMarkdown> */}
          <div>id={props.router.query.id}</div>
        </Content>
      </Layout>
    </Content >
  )
});
export default MyContent;
