import React, { useEffect, useState, useRef } from 'react'
// import { message } from 'antd';
import dayjs from 'dayjs'
import { getWeather } from '../../api/api'
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import './weather.css'
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
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
  const weatherInfoRef = useRef();
  const [weatherWidth, setWeatherWidth] = useState(300);
  const [weatherAnimation, setWeatherAnimation] = useState('');
  const [rightArr, setRightArr] = useState(true);


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
    if (weather == '晴') {
      return <IconFont type="icon-sun-line" className="weather-icon" />
    }
    else if (weather == '多云') {
      return <IconFont type="icon-cloud" className="weather-icon" />
    }
    else if (weather.indexOf('雨') != -1) {
      return <IconFont type="icon-rainy-line" className="weather-icon" />
    }
  }
  useEffect(() => {
    weatherInfoRef.current = storageUtils.getCookie('weather')
    // console.log(weatherInfoRef.current)
    if (weatherInfoRef.current && weatherInfoRef.current.status != 0) {
      async function fetchData() {
        let result = await getWeather()
        storageUtils.saveCookie('weather', result)
        weatherInfoRef.current = result
      }
      fetchData()
    }
    setWeatherInfo(weatherInfoRef.current.data)
    setforecastInfo(weatherInfoRef.current.data.forecast)
    setRefresh(true)
    // console.log(weatherInfo)
    console.log(forecastInfo)
  }, [refresh]);

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
                  if (index == 0) {
                    return false
                  }
                  // else if (index == 1) {
                  //   return <li key={index} className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">{item.date}</span><span className="day-temp">29°C</span></li>
                  // }
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
  </>
}

export default Weather
