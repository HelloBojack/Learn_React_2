import React from 'react'
import { Card, Select, DatePicker } from 'antd';
import echarts from 'echarts'
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
    color: '#38d7b7',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          type: 'dashed',
          color: '#38d7b7'
        }
      }
    },
    grid: {
      left: '2%',
      right: '2%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['2020-04-20', '2020-04-21', '2020-04-22', '2020-04-23', '2020-04-24', '2020-04-25', '2020-04-26'],
      axisLine: {
        lineStyle: {
          width: 1,
          type: 'dotted',
          color: '#686868'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {

      }
    },
    yAxis: {
      // name: '阅读数',
      nameTextStyle: {
        fontFamily: 'MicrosoftYaHei',
        fontSize: '14px',
        color: '#686868',
      },
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    series: [
      {
        type: 'line',
        smooth: true,
        data: [15, 32, 14, 33, 9, 12, 41],
        symbolSize: 1,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default',
              //渐变色实现
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1,//变化方向
                //渐变色
                [
                  { offset: 0, color: 'rgba(56, 215, 183, 0.4)' },
                  { offset: 0.89, color: 'rgba(56, 215, 183, 0.1)' }
                ]
              ),
            },
            lineStyle: {  //线的颜色
              color: '#38d7b7'
            }
          },
          emphasis: { // 鼠标经过时：
            symbol: "circle",
            borderWidth: 13,
            borderColor: 'rgba(195,243,233,0.7)'
            // color: '#38d7b7',
            // borderColor: '#38d7b7',
          }
        },
      },
      {
        type: 'line',
        smooth: true,
        data: [33, 11, 22, 55, 66, 33, 21],
        symbolSize: 1,
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default',
              //渐变色实现
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1,//变化方向
                //渐变色
                [
                  { offset: 0, color: 'rgba(16, 142, 233, 0.4)' },
                  { offset: 0.89, color: 'rgba(16, 142, 233, 0.1)' }
                ]
              ),
            },
            lineStyle: {  //线的颜色
              color: '#1890ff'
            }
          },
          emphasis: { // 鼠标经过时：
            symbol: "circle",
            borderWidth: 13,
            borderColor: 'rgba(16, 142, 233,0.7)'
            // color: '#38d7b7',
            // borderColor: '#38d7b7',
          }
        },
      }
    ]

  })


  return <>
    <Card
      title={
        <Select defaultValue="1" style={{ width: 120 }} >
          <Option value="1">阅读数</Option>
          <Option value="2">点赞数</Option>
          <Option value="3">评论数</Option>
          <Option value="4">关注人数</Option>
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
        <div style={{ width: '50%', height: '400px', paddingTop: 10 }}>
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