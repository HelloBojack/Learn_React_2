import React, { useState } from 'react'
import { Skeleton, Switch, Card, Avatar, Tooltip } from 'antd';
import {
  InfoCircleOutlined,
  EditOutlined, EllipsisOutlined, SettingOutlined
} from '@ant-design/icons';
import './dataCenter.css'
const { Meta } = Card;


function DataCenter() {
  const [cardLoading, setCardLoading] = useState(false)

  const onChange = checked => {
    setCardLoading(!checked);
  };

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
      <Card title="阅读总数" extra={<Tooltip title="prompt text"><InfoCircleOutlined /></Tooltip>} style={{ width: 300 }}>
        <div>
          42,836
        </div>
      </Card>
      <Card title="阅读总数" extra={<Tooltip title="prompt text"><InfoCircleOutlined /></Tooltip>} style={{ width: 300 }}>
        <div>
          42,836
        </div>
      </Card>
      <Card title="阅读总数" extra={<Tooltip title="prompt text"><InfoCircleOutlined /></Tooltip>} style={{ width: 300 }}>
        <div>
          42,836
        </div>
      </Card>
      <Card title="阅读总数" extra={<Tooltip title="prompt text"><InfoCircleOutlined /></Tooltip>} style={{ width: 300 }}>
        <div>
          42,836
        </div>
      </Card>
    </div>
  </>
}

export default DataCenter
