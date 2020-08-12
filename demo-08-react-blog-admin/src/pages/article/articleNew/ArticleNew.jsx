import React, { useState, useEffect } from 'react'
import marked from 'marked'
import hljs from "highlight.js";
import {
  Form,
  Input,
  Button,
  Switch,
  Card,
  Row,
  Col,
  message,
} from 'antd';

import { newArticleItem, getArticleItem } from '../../../api/api'

import TagsArea from '../../../components/articleNew/tagsArea/tagsArea'

import 'highlight.js/styles/monokai-sublime.css';
import './ArticleNew.css'
const { TextArea } = Input

const ArticleNew = (props, ref) => {
  const { match } = props
  const id = match.params.id
  const [form] = Form.useForm();
  const [articleContent, setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [formInitialValues, setFormInitialValues] = useState({
    title: '',
    content: '',
    intro: '',
    tags: '',
    visibility: 1
  })
  const [previewSwitch, setPreviewSwitch] = useState(true)
  // const [refresh, setRefresh] = useState(false);
  // const articleRef = useRef();
  useEffect(() => {
    if (id) {
      async function fetchData() {
        let result = await getArticleItem(id)
        setFormInitialValues(result.data)
        setArticleContent(result.data.content)
        setMarkdownContent(marked(result.data.content))
        // console.log(initialValues)
        form.resetFields()
      }
      fetchData();
      // setRefresh(true)
    }
  }, [id])


  // marked & highlight settings
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
    setMarkdownContent(marked(articleContent))
  }

  const previewSwitchOnChange = (checked) => {
    setPreviewSwitch(checked)
    setMarkdownContent(marked(articleContent))

  }

  const onFinish = values => {
    values.visibility = Number(values.visibility)
    async function newItem() {
      let result = await newArticleItem(values)
      if (result.result) {
        message.success('保存成功')
      }
    }
    newItem()
    // console.log(values);
  };

  return <>
    {/* {formInitialValues.tags} */}
    <Card>
      <Row>
        <Col span={12}>
          <Form
            form={form}
            onFinish={onFinish}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            initialValues={formInitialValues}
          >
            <Form.Item label="文章标题：" name="title" >
              <Input placeholder="文章标题" />
            </Form.Item>
            <Form.Item label="文章内容：" name="content">
              <TextArea
                id="文章内容"
                className="markdown-content"
                rows={20}
                onChange={changeContent}
                onPressEnter={changeContent}
                placeholder="文章内容"
              />
            </Form.Item>
            <Form.Item label="文章简介：" name="intro">
              <TextArea
                rows={2}
                placeholder="文章简介"
              />
            </Form.Item>
            <Form.Item label="标签：" name="tags" >
              <TagsArea />
            </Form.Item>
            <Form.Item label="预览：">
              <Switch defaultChecked onChange={previewSwitchOnChange} />
            </Form.Item>
            <Form.Item label="是否显示：" name="visibility" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Col>
        {previewSwitch && <Col span={12}>
          <Card style={{ width: '100%' }}>
            <div className="markdownArea" dangerouslySetInnerHTML={{ __html: markdownContent }}></div>
          </Card>
        </Col>}
      </Row>
    </Card >
  </>

}

export default React.forwardRef(ArticleNew);