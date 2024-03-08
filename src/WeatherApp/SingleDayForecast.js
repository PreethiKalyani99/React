import React from "react";
import { format } from 'date-fns';
import { Card, CardHeader, CardBody, Container} from "react-bootstrap";

export function SingleDayForecast(props){
    const data = props.weatherData

    const getDay = (value) => {
        const date = new Date(value);
        const options = { weekday: 'long' };
        return date.toLocaleDateString('en-US', options);
    }

    const getFormattedDate = (value) => format(new Date(value), "MMMM do, h:mma")

    const convertToFahrenheit = (value) => {
        const fahrenheit = ((value - 273.15) * 9)/5 + 32;
        return Math.round(fahrenheit)
    }
    return (
        <>
            <Container className="card-container" key={props.i}>
                <div className="fs-3"><b>{getDay(data.dt_txt)}</b></div>
                <div className="fontColor">{getFormattedDate(data.dt_txt)}</div>
                <img src ={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon" className="weather-icon "/>
                <div className="fs-3"><b>{convertToFahrenheit(data.main.temp)}°F</b></div>
                <div className="pb-2">{data.weather[0].description}</div>    
            </Container>
        </>
    )
}