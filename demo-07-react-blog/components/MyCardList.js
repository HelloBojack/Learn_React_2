import { List, Avatar } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Router from "next/router";
import React, { useContext } from 'react';
import Link from 'next/link'
import { TestContext } from '../pages/index'

const IconText = ({ icon, text }) => (
  <span>
    {React.createElement(icon, { style: { marginRight: 8 } })}
    {text}
  </span>
);

const MyCardList = () => {
  const datalist = useContext(TestContext);
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10
      }}
      dataSource={datalist}
      footer={
        <div>
          <b>ant design</b> footer part
      </div>
      }
      renderItem={item => (
        <Link href={{ pathname: 'detail', query: { id: item.id } }}>
          <List.Item
            style={{ cursor: "pointer" }}
            // onClick={() => Router.push("/detail?id=" + item.id)}
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={item.pic}
              />
            }
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        </Link >
      )}
    />
  )
};
export default MyCardList;
