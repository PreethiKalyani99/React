import React from "react";
import { format } from 'date-fns';
import { Container} from "react-bootstrap";

export default function SingleDayForecast(props){
    const data = props.weatherData
    console.log(data.weather[0].description, 'weather')
    const getDay = (value) => {
        const date = new Date(value);
        const options = { weekday: 'long' };
        return date.toLocaleDateString('en-US', options);
    }

    const getFormattedDate = (value) => {
        console.log(value, 'date')
        return format(new Date(value), "MMMM do, h:mma")}

    const convertToFahrenheit = (value) => {
        const fahrenheit = ((value - 273.15) * 9)/5 + 32;
        return Math.round(fahrenheit)
    }

    const getWeatherIcon = (description) => {
        const iconMap = {
            'light rain': 'wi-sprinkle',
            'overcast clouds': 'wi-cloudy',
            'moderate rain': 'wi-sprinkle',
            'scattered clouds': 'wi-cloudy',
            'clear sky': 'wi-day-sunny'
        }
        return iconMap[description] || 'wi-cloud'
    }
    
    return (
        <>
            <Container className="card-container" key={props.i}>
                <div className="fs-3"><b>{getDay(data.dt_txt)}</b></div>
                <div className="fontColor">{getFormattedDate(data.dt_txt)}</div>
                <img src ={require(`../utils/assets/icons/${getWeatherIcon(data.weather[0].description)}.svg`)} alt="weather icon" className="weather-icon "/>
                <div className="fs-3"><b>{convertToFahrenheit(data.main.temp)}°F</b></div>
                <div className="pb-2">{data.weather[0].description}</div>    
            </Container>
        </>
    )
}