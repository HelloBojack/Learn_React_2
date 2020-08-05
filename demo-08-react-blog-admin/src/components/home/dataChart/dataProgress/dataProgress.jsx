import React from 'react'
import { Progress } from 'antd';

function DataProgress(props) {
  const item = props.item
  return <>
    <div style={{ fontSize: 20, marginTop: 10 }}>
      {item.title}
    </div>
    <div style={{ marginTop: 10 }}>
      同比增长
    </div>
    <Progress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={item.percent}
      status="active"
    />
  </>
}
export default DataProgress
