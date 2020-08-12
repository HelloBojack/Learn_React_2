import React from 'react'
// import Weather from '../../components/home/weather/weather'
import DataCenter from '../../components/home/dataCenter/dataCenter'
import DataChart from '../../components/home/dataChart/dataChart'
import './home.css'

function Home() {
  return <>
    <DataCenter></DataCenter>
    <DataChart></DataChart>

    {/* <Weather></Weather> */}
  </>
}

export default Home
