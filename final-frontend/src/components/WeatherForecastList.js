import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';


const WeatherList = (props) => {
    const renderWeather = (cityData,i)=> {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp-273);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        return(
            <tr key={i}>
                <td>{name}</td>
                <td><Chart color="orange" data={temps} units={"C"} /></td>
                <td><Chart color="blue" data={pressures} units={"hPa"}/></td>
                <td><Chart color="green" data={humidities} units={"%"}/></td>
            </tr>
        )};
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (C)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
                {props.weather.map(renderWeather)}
            </tbody>
        </table>
    )}

const mapStateToProps = ({ weather }) => {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);