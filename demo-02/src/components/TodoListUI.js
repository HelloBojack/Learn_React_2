import React, { Fragment } from 'react'
import 'antd/dist/antd.css';
import { Layout, Input, PageHeader, Button, List, Checkbox } from 'antd';
const { Content } = Layout;

const TodoListUI = (props) => {
  return <Fragment>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <PageHeader
        className="site-page-header"
        title="TodoList"
        subTitle="This is a TodoList"
      />

      <div style={{ padding: '0 24px' }}>
        <Input
          style={{ width: 200, marginRight: 20 }}
          placeholder="to do something"
          value={props.inputValue}
          onChange={props.changInputValue}
        ></Input>
        <Button
          type="primary"
          onClick={props.addTodoList}
        >Add Todo</Button>
        <List
          style={{ marginTop: 20, width: 310 }}
          size='small'
          bordered
          dataSource={props.todoList}
          renderItem={(item, index) => (
            <List.Item>
              <Checkbox
              // checked={item.completed}
              // style={{ textDecorationLine: item.completed ? 'line-through' : 'none' }}
              >{item.text}</Checkbox>
              <Button type="danger"
                onClick={props.delTodoItem.bind(this, index)}
              > Detele</Button>
            </List.Item>
          )}
        />
      </div>
    </Content>


    {/* <Alert
  message="Error"
  description="This is an error message about copywriting."
  type="error"
  showIcon
/> */}
  </Fragment>
}


export default TodoListUI 