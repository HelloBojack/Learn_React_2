import React from 'react'
// import { Skeleton, Switch, Card, } from 'antd';

import './dataCenter.css'

import DataCard from './dataCard/dataCard'

// const { Meta } = Card;

const dataCenterConfig = [
  {
    title: '阅读',
    tooltip: 'text',
    number: 123,
    trend: 12,
  },
  {
    title: '点赞',
    tooltip: 'text',
    number: 123,
    trend: 12,
  },
  {
    title: '评论',
    tooltip: 'text',
    number: 123,
    trend: 12,
  },
  {
    title: '关注人',
    tooltip: 'text',
    number: 123,
    trend: 12,
  },
]

function DataCenter() {
  // const [cardLoading, setCardLoading] = useState(false)

  // const onChange = checked => {
  //   setCardLoading(!checked);
  // };

  return <>
    {/* <Switch checked={!cardLoading} onChange={onChange} /> */}
    {/* <Card style={{ width: 300, marginTop: 16 }} loading={cardLoading}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card> */}
    <div className="dataCenter">
      <DataCard dataCenterConfig={dataCenterConfig}></DataCard>
    </div>
  </>
}

export default DataCenter
