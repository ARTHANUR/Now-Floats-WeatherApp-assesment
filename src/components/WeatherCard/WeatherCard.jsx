import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './WeatherCard.css'
import cloud from '../../assets/cloud.png'
export default function WeatherCard() {

    const [WeatherData, getWeatherData] = useState([])

    // useEffect(() => {
    //     GetCurrentWeather()
    // }, [])

    // async function GetCurrentWeather() {
    //     await axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=ae92741d3386ebba207f32c28f1c9291').then((data) => {
    //         console.log(data)
    //     }).catch((e) => console.log(e))
    // }

    return (
        <div className="weather-card-wrap">
            <div className='weather-sec-1'>
                <div>
                    <img src={cloud} alt="cloud" />
                </div>

                <div className='weather-head' >
                    <p className='marign-0'>Weather</p>
                    <p className='marign-0 '>What's the weather</p></div>
            </div>
            <div>
                <div>
                    <p>22^C</p>
                    <p>Partly Cloudy</p>
                </div>
                <div>
                    <p>11^C</p>
                </div>
            </div>
            <div className='sub-cards'>
                <div>
                    <p>Pressure</p>
                    <p>800mb</p>
                </div>
                <div>
                    <p>Velocity</p>
                    <p>4.3km</p>
                </div>
                <div>
                    <p>Humidity</p>
                    <p>87%</p>
                </div>
            </div>
        </div>
    )
}
