import React from 'react'
import Location from '../components/LocationCard/Location'
import Temperature from '../components/TemperatureCard/Temperature'
import WeatherCard from '../components/WeatherCard/WeatherCard'
import Header from './Header'
import './Homepage.css'
export default function Homepage() {
    return (
        <div className='main-container'>
            <div className="sub-container">

                <div>
                    <Header />
                    <div className="card-cont">
                        <Location />
                        <Temperature />
                        <WeatherCard />
                        <WeatherCard />
                    </div>
                </div>


            </div>

        </div>
    )
}
