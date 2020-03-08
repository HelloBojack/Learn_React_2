import React, { Component, Fragment } from 'react'

import 'antd/dist/antd.css';
import { Layout, Input, PageHeader, Button, List, Checkbox } from 'antd';

const { Content } = Layout;


const defaultCheckedList = ['Learn React', 'Learn Vue'];

export default class TodoList extends Component {
  state = {
    todoList: defaultCheckedList,
  };

  render() {
    return (
      <Fragment>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

          <PageHeader
            className="site-page-header"
            title="TodoList"
            subTitle="This is a TodoList"
          />

          <div style={{ padding: '0 24px' }}>
            xw  <Input placeholder="add to do something" style={{ width: 200, marginRight: 20 }} ></Input>
            <Button type="primary">Add</Button>
            <List
              style={{ marginTop: 20, width: 280 }}
              size='small'
              bordered
              dataSource={defaultCheckedList}
              renderItem={item => (
                <List.Item>
                  <Checkbox>{item}</Checkbox>
                </List.Item>
              )}
            />
          </div>
        </Content>
      </Fragment>
    )
  }



}