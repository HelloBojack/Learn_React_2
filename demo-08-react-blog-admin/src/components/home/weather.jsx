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
  const [weatherInfo, setWeatherInfo] = useState({ data: {} });
  const [forecastInfo, setforecastInfo] = useState([{ date: '' }]);
  const [refresh, setRefresh] = useState(false);
  const weatherInfoRef = useRef();

  //   var script = document.createElement('script');
  //   var script2 = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.async = true;
  //   script.src = 'https://widget.heweather.net/standard/static/js/he-standard-common.js?v=1.1';
  //   script2.type = 'text/javascript';
  //   script2.innerText = `WIDGET = {
  //   CONFIG: {
  //     "layout": 2,
  //       "width": "230",
  //         "height": "270",
  //           "background": 1,
  //             "dataColor": "FFFFFF",
  //               "borderRadius": 5,
  //                 "key": "0296a7f900f0424d85739c948355f333"
  //   }
  // } `
  //   document.head.appendChild(script);
  //   document.head.appendChild(script2);

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
    console.log(weatherInfo)
    console.log(forecastInfo)


  }, [refresh]);

  return <>
    <div ref={weatherInfoRef}>
      <div id="he-plugin-standard"></div>
      <div className="container">
        <div className="weather-side">
          <div className="weather-gradient"></div>
          <div className="date-container">
            <h2 className="date-dayname">{forecastInfo[0].date.slice(-3)}</h2>
            <span className="date-day">{dayjs().format('YYYY-MM-DD')}</span>
            <IconFont type="icon-location" />
            <span className="location">{weatherInfo.city}</span>
          </div>
          <div className="weather-container">
            <IconFont type="icon-cloud" className="weather-icon" />
            <h1 className="weather-temp">{weatherInfo.temp}°C</h1>
            <h3 className="weather-desc">{forecastInfo[0].weather}</h3>
          </div>
        </div>
        <div className="info-side">
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
                    return
                  }
                  // else if (index == 1) {
                  //   return <li key={index} className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">{item.date}</span><span className="day-temp">29°C</span></li>
                  // }
                  else {
                    return <li key={index} >
                      <IconFont type="icon-cloud" className="weather-icon-mini" />
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
        </div>
      </div>
    </div>
  </>
}

export default Weather
