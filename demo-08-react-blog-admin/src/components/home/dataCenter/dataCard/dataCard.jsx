import React from 'react'
import { Card, Tooltip } from 'antd';
import {
  InfoCircleOutlined,
} from '@ant-design/icons';
import './dataCard.css'

function DataCard(props) {
  // console.log(props.dataCenterConfig)
  return <>
    {
      props.dataCenterConfig.map(it =>
        <Card title={it.title + '总数'}
          hoverable
          key={it.title}
          extra={<Tooltip title={it.tooltip}><InfoCircleOutlined /></Tooltip>}
          style={{ width: 200 }}>
          <div className="dataNumber">
            {it.number}
            <div className="dataTrend">
              昨日{it.title}数 {it.trend}
            </div>
          </div>
        </Card>
      )
    }

  </>
}

export default DataCard
