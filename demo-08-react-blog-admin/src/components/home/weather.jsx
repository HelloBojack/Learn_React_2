import React, { useEffect, useState, useRef } from 'react'
import { message } from 'antd';
import dayjs from 'dayjs'
import { getWeather } from '../../api/api'
import './weather.css'
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1960620_ucuszky3ggg.js',
  ],
});

function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [forecast, setForecast] = useState([{}]);
  const [refresh, setRefresh] = useState(false);
  const weatherInfoRef = useRef();


  useEffect(() => {
    let weather = storageUtils.getCookie('weather')
    console.log(weather)
    if (weather != {}) {
      console.log(1)
    }
    else {
      async function fetchData() {
        console.log(2)
        let result = await getWeather()
        storageUtils.saveCookie('weather', result)
        //     weather = result.data

        //     memoryUtils.weather = weather
        //     if (result.status == 0) {
        //       setWeatherInfo(result.data)
        //       setForecast(result.data.forecast)
        //       setRefresh(true)
        //       // console.log(result.data)
        //       console.log(weatherInfo)
        //       console.log(forecast)
        //     }
        //     else {
        //       message.error(result.msg);
        //     }
      }
      fetchData()
    }


  }, []);

  return <>
    <div ref={weatherInfoRef}>
      <div className="container">
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{dayjs().format('dddd')}</h2>
            <span className="date-day">{dayjs().format('YYYY-MM-DD')}</span>
            <IconFont type="icon-location" />
            <span className="location">{weatherInfo.city}</span>
          </div>
          <div className="weather-container">
            <IconFont type="icon-cloud" className="weather-icon" />
            <h1 className="weather-temp">{weatherInfo.temp}°C</h1>
            <h3 className="weather-desc">{forecast[0].weather}</h3>
          </div>
        </div>
        <div className="info-side">
          <div className="today-info-container">
            <div className="today-info">
              <div className="precipitation"> <span className="title">最高温度</span><span className="value">{forecast[0].temphigh}°C</span>
                <div className="clear"></div>
              </div>
              <div className="humidity"> <span className="title">最低温度</span><span className="value">{forecast[0].templow}°C</span>
                <div className="clear"></div>
              </div>
              <div className="wind"> <span className="title">{forecast[0].wind}</span><span className="value">{forecast[0].windforce}</span>
                <div className="clear"></div>
              </div>
            </div>
          </div>
          <div className="week-container">
            <ul className="week-list">
              <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">Tue</span><span className="day-temp">29°C</span></li>
              <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span className="day-temp">21°C</span></li>
              <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span className="day-temp">08°C</span></li>
              <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span className="day-temp">19°C</span></li>
              <div className="clear"></div>
            </ul>
          </div>
          <div className="location-container">
            <button className="location-button"> <i data-feather="map-pin"></i><span>Change location</span></button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Weather
