import React from 'react';
import WeatherSearchBar from '../components/WeatherSearchBar';
import WeatherList from '../components/WeatherForecastList';

const Weather = (props)=> (
    <div>
    <WeatherSearchBar />
    <WeatherList />
    </div>
)


export default Weather;