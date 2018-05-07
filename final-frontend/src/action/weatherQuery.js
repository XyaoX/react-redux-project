import axios from 'axios'; 
const key='6a78596d062df78380eff5944c4e5567';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?us&appid=${key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url, {'contentType':null});
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}