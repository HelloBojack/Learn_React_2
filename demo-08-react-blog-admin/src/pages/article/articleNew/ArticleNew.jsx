import React, { useState } from 'react'
import marked from 'marked'
import hljs from "highlight.js";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Card,
} from 'antd';
import 'highlight.js/styles/monokai-sublime.css';

const { TextArea } = Input

const ArticleNew = () => {
  const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容

  const [componentSize, setComponentSize] = useState('default');


  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true, // 允许 Git Hub标准的markdown.
    pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
    sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
    breaks: false, // 允许回车换行（该选项要求 gfm 为true）
    smartLists: true, // 使用比原生markdown更时髦的列表
    smartypants: false, // 使用更为时髦的标点
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }

  return <>
    <Card>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        // onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="文章标题：">
          <Input placeholder="文章标题" />
        </Form.Item>
        <Form.Item label="文章内容：">
          <TextArea
            id="文章内容"
            className="markdown-content"
            rows={30}
            onChange={changeContent}
            onPressEnter={changeContent}
            placeholder="编辑内容"
          />
        </Form.Item>
        <Form.Item label="Switch">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </Card>




    <div className="show-html" dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
  </>

}

export default ArticleNew;