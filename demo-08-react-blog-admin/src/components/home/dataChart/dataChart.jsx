import React from 'react'
import { Card, Tooltip, Select } from 'antd';
import { DatePicker, Space } from 'antd';

import echarts from 'echarts';
import ReactEcharts from "echarts-for-react";
const { RangePicker } = DatePicker;
const { Option } = Select;


function DataChart() {
  echarts.registerTheme('my_theme', {
    backgroundColor: '#f4cccc'
  });

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
        <RangePicker />
      }
      hoverable
      style={{ width: '100%', marginTop: 20 }}>
      <div>
        <div>
          <ReactEcharts
            option={getOption()}
            style={{ height: '300px', width: '50%' }}
            className='echarts-for-echarts'
            theme='my_theme' />
        </div>
        <div>
          tab1
        </div>
      </div>



    </Card>
  </>
}
export default DataChart