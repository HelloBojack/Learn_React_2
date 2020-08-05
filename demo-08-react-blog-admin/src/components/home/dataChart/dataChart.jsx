import React from 'react'
import { Card, Select, DatePicker } from 'antd';
import ReactEcharts from "echarts-for-react";
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import DataProgress from './dataProgress/dataProgress'


const { RangePicker } = DatePicker;
const { Option } = Select;

function DataChart() {
  const progressList = [
    {
      title: '阅读数',
      percent: '99'
    },
    {
      title: '点赞数',
      percent: '66'
    },
    {
      title: '评论数',
      percent: '33'
    },
    {
      title: '关注人数',
      percent: '11'
    },
  ]

  const getOption = () => ({
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'shadow'
      // }
    },
    legend: {
      data: ['阅读数', '点赞数'],
      align: 'left',
      top: 18,
      right: 20,
      textStyle: {
        color: "#c1c5cd"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 12
    },
    grid: {
      top: '24%',
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
      ],
      axisLine: {
        show: true,
        lineStyle: {
          color: "#45647f",
          width: 1,
          type: "solid"
        }
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#a1d8f1",
        }
      },
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#45647f",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: '#a1d8f1',
          fontSize: '12px'
        }
      }

    }],
    series: [{
      name: '阅读数',
      type: 'line',
      data: [20, 50, 80, 58, 83, 68, 57, 100],
      barWidth: 8, //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
        color: '#14e3cc'
      }
    }, {
      name: '点赞数',
      type: 'line',
      data: [50, 70, 60, 61, 75, 87, 60, 62],
      barWidth: 8,
      // barGap: 1,
      itemStyle: {
        color: '#f84f55'
      }
    }]
  })


  return <>
    <Card
      title={
        <Select defaultValue="1" style={{ width: 120 }} >
          <Option value="1">阅读数</Option>
          <Option value="2">点赞数</Option>
          <Option value="3">评论数</Option>
          <Option value="3">关注人数</Option>
        </Select>
      }
      extra={
        <RangePicker locale={locale} />
      }
      hoverable
      style={{ width: '100%', marginTop: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400 }}>
        <div style={{ width: '50%' }}>
          <ReactEcharts
            option={getOption()}
            style={{ height: '400px' }}
            className='echarts-for-echarts'
          />
        </div>
        <div style={{ width: '50%', height: '400px', paddingTop: 20 }}>
          {
            progressList.map((item, index) => {
              return <DataProgress item={item} key={item.title}></DataProgress>
            })
          }
        </div>
      </div>



    </Card>
  </>
}
export default DataChart