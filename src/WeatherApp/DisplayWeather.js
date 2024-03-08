import React from "react";
import { Container, Card, CardHeader, CardBody} from "react-bootstrap";
import { SingleDayForecast } from "./SingleDayForecast";

export function DisplayWeather(props){
    return (
        <>
            <Container>
                <Card>
                    <CardHeader className="header font">
                        {props.weatherForecast.length}-Day Forecast.
                    </CardHeader>
                    <div className={props.weatherForecast.length === 0 ? "hide" : "city-name fontColor"}>{props.cityInfo}</div>
                    <CardBody className={props.weatherForecast.length === 0 ? "hide" : "header"}>
                        {props.weatherForecast && props.weatherForecast.map((item, index) => <SingleDayForecast weatherData={item} i={index}/>)}
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}