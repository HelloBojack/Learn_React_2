import React, { useEffect, useState, useRef } from 'react'
// import { message } from 'antd';
import dayjs from 'dayjs'

// import echarts from 'echarts'
// import ReactEcharts from "echarts-for-react";

import { getWeather } from '../../../api/api'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import './weather.css'

import storageUtils from '../../../utils/storageUtils'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1960620_6zr7qjott2a.js',
  ],
});

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({ data: {} });
  const [forecastInfo, setforecastInfo] = useState([{ date: '', weather: '' }]);
  const [refresh, setRefresh] = useState(false);

  // 动画
  const [weatherWidth, setWeatherWidth] = useState(300);
  const [weatherAnimation, setWeatherAnimation] = useState('');
  const [rightArr, setRightArr] = useState(true);

  const weatherInfoRef = useRef();
  // const weatherDateRef = useRef([]);
  // const weatherDataRef = useRef([]);

  // const [weatherDate, setWeatherDate] = useState([]);
  // const [weatherData, setWeatherData] = useState([]);


  const leftWeather = () => {
    setWeatherWidth(300)
    setWeatherAnimation('animation-fadeOut')
    setRightArr(true)
  }
  const rightWeather = () => {
    setWeatherWidth(800)
    setWeatherAnimation('animation-fadeIn')
    setRightArr(false)
  }
  const weatherIcon = (weather) => {
    if (weather === '晴') {
      return <IconFont type="icon-sun-line" className="weather-icon" />
    }
    else if (weather === '多云') {
      return <IconFont type="icon-cloud" className="weather-icon" />
    }
    else if (weather.indexOf('雨') !== -1) {
      return <IconFont type="icon-rainy-line" className="weather-icon" />
    }
  }



  useEffect(() => {
    weatherInfoRef.current = storageUtils.getCookie('weather')
    // console.log(weatherInfoRef.current)
    if (weatherInfoRef.current && weatherInfoRef.current.status !== 0) {
      async function fetchData() {
        let result = await getWeather()
        storageUtils.saveCookie('weather', result)
        weatherInfoRef.current = result
      }
      fetchData()
    }

    // const getChartData = () => {
    //   forecastInfo.map((item, index) => {
    //     if (item.date) {
    //       weatherDateRef.current.push(item.date)
    //       weatherDataRef.current.push((Number(item.temphigh) + Number(item.templow) / 2))
    //     }
    //   })
    //   setWeatherDate(weatherDateRef.current)
    //   setWeatherData(weatherDataRef.current)
    //   console.log(weatherData)
    //   console.log(weatherDate)
    // }

    setWeatherInfo(weatherInfoRef.current.data)
    setforecastInfo(weatherInfoRef.current.data.forecast)
    setRefresh(true)
    // getChartData()
    // console.log(weatherInfo)
    // console.log(forecastInfo)
  }, [refresh]);


  // const colors = [
  //   new echarts.graphic.LinearGradient(0, 0, 0, 1, [
  //     {
  //       offset: 0,
  //       color: "#504DFF"
  //     },
  //     {
  //       offset: 1,
  //       color: "#91E6FF"
  //     }
  //   ]),
  //   new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  //     {
  //       offset: 0,
  //       color: "#EEBD89"
  //     },
  //     {
  //       offset: 1,
  //       color: "#D13ABD"
  //     }
  //   ]),
  //   new echarts.graphic.LinearGradient(0, 0, 1, 0, [
  //     {
  //       offset: 0,
  //       color: "#C973FF"
  //     },
  //     {
  //       offset: 1,
  //       color: "#AEBAF8"
  //     }
  //   ]),
  //   "#A2C6E0",
  //   "#1e47697d"
  // ];

  // const getOption = () => ({
  //   legend: {
  //     right: "10%",
  //     top: "5%",
  //     textStyle: {
  //       color: colors[3],
  //       fontSize: 8
  //     },
  //     itemWidth: 15,  // 图例标记的图形宽度
  //     itemHeight: 3,  // 图例标记的图形高度
  //     icon: "rect",   // 图例形状为方形
  //     data: ["今日", "昨日", "历史最高"]  // 图例的数据数组
  //   },
  //   xAxis: [
  //     {
  //       type: "category",
  //       boundaryGap: false,
  //       axisLine: {
  //         lineStyle: {
  //           color: colors[3]
  //         }
  //       },
  //       axisLabel: {      // 坐标轴刻度设置
  //         fontSize: 8,
  //         margin: 4,      // 距离坐标轴的距离
  //       },
  //       axisTick: {       // 是否显示刻度
  //         show: false
  //       },
  //       data: []          // 数据数组，可以异步获取赋值
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: "value",
  //       axisLine: {       // 坐标轴线的配置
  //         show: false,
  //         lineStyle: {    // 轴线样式
  //           color: colors[3]
  //         }
  //       },
  //       splitLine: {      // y轴分割线配置
  //         show: true,
  //         lineStyle: {    // 分割线样式
  //           type: 'dashed',   // 虚线
  //           color: '#1e47697d'
  //         }
  //       },
  //       axisTick: {       // 轴线上的刻度线配置
  //         show: false
  //       },
  //       axisLabel: {
  //         fontSize: 8,
  //         formatter: v => {
  //           return v >= 1000 ? v / 1000 + "k" : v;
  //         }
  //       }
  //     }
  //   ],
  //   series: [
  //     {
  //       name: "今日",         // 系列名称，用于tooltip的显示, 与legend的data是相对应的
  //       type: "line",         // 类型，是折线还是柱子还是其他的
  //       // stack: "总量",     // 是否显示图形堆叠
  //       color: colors[0],     // 这里是指对应折线`line`的颜色
  //       areaStyle: {
  //         opacity: ".3",
  //         color: colors[0]    // 一个颜色数组中的某个值
  //       },
  //       symbol: "none",       // 标记的图形
  //       smooth: false,        // 是否平滑曲线显示
  //       data: [120, 132, 101, 134, 90, 230, 210] // 对应x轴上的value值
  //     },
  //     {
  //       name: "昨日",         // 系列名称，用于tooltip的显示, 与legend的data是相对应的
  //       type: "line",         // 类型，是折线还是柱子还是其他的
  //       // stack: "总量",     // 是否显示图形堆叠
  //       color: colors[1],     // 这里是指对应折线`line`的颜色
  //       areaStyle: {
  //         opacity: ".3",
  //         color: colors[1]    // 一个颜色数组中的某个值
  //       },
  //       symbol: "none",       // 标记的图形
  //       smooth: false,        // 是否平滑曲线显示
  //       data: [90, 100, 60, 200, 30, 10, 310] // 对应x轴上的value值
  //     },
  //     {
  //       name: "历史最高",         // 系列名称，用于tooltip的显示, 与legend的data是相对应的
  //       type: "line",         // 类型，是折线还是柱子还是其他的
  //       // stack: "总量",     // 是否显示图形堆叠
  //       color: colors[2],     // 这里是指对应折线`line`的颜色
  //       areaStyle: {
  //         opacity: ".3",
  //         color: colors[2]    // 一个颜色数组中的某个值
  //       },
  //       symbol: "none",       // 标记的图形
  //       smooth: false,        // 是否平滑曲线显示
  //       data: [150, 162, 171, 144, 240, 330, 410] // 对应x轴上的value值
  //     },
  //   ]
  // });



  return <>
    <div ref={weatherInfoRef}>
      <div className="container" style={{ width: `${weatherWidth}px` }}>
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{forecastInfo[0].date.slice(-3)}</h2>
            <span className="date-day">{dayjs().format('YYYY-MM-DD')}</span>
            <IconFont type="icon-location" />
            <span className="location">{weatherInfo.city}</span>
          </div>
          <div className="weather-container">
            {weatherIcon(forecastInfo[0].weather)}
            <h1 className="weather-temp">{weatherInfo.temp}°C</h1>
            <h3 className="weather-desc">{forecastInfo[0].weather}</h3>
          </div>
          {rightArr && <RightOutlined style={{ position: 'absolute', right: '5%', top: '50%' }} onClick={() => rightWeather()} />}
        </div>
        <div className={["info-side", weatherAnimation].join(' ')}>
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation">
                <span className="title">最高温度</span>
                <span className="value">{forecastInfo[0].temphigh}°C</span>
                <div className="clear"></div>
              </div>
              <div className="humidity">
                <span className="title">最低温度</span>
                <span className="value">{forecastInfo[0].templow}°C</span>
                <div className="clear"></div>
              </div>
              <div className="wind">
                <span className="title">{forecastInfo[0].wind}</span>
                <span className="value">{forecastInfo[0].windforce}</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>

          <div className="week-container">
            <ul className="week-list">
              {
                forecastInfo.map((item, index) => {

                  if (index === 0) {
                    return false
                  }
                  else {
                    return <li key={index} >
                      <span>{weatherIcon(item.weather)}</span>
                      <span className="day-name">{item.weather}</span>
                      <span className="day-name">{item.date}</span>
                      <span className="day-temp">{(Number(item.temphigh) + Number(item.templow) / 2)}°C</span>
                    </li>
                  }
                }
                )
              }
            </ul>
          </div>
          {/* <div className="location-container">
            <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
          </div> */}
          <LeftOutlined style={{ position: 'absolute', right: 0, top: '50%' }} onClick={() => leftWeather()} />
        </div>
      </div>
    </div>
    {/* <div style={{ height: 300 }} >
      <ReactEcharts
        option={getOption()}
        style={{ height: '100%', width: '100%' }}
        notMerge={true}
        lazyUpdate={true}
        className='echarts-for-echarts'
      />
    </div> */}
  </>
}

export default Weather
