import React from "react";
import { Container, Card, CardHeader, CardBody} from "react-bootstrap";
import { SingleDayForecast } from "./SingleDayForecast";

export function WeatherForecast(props){
    return (
        <>
            <Container>
                <Card>
                    <CardHeader className="header font">
                        {props.weatherForecast.length}-Day Forecast.
                    </CardHeader>
                    <div className="city-name fontColor">{props.cityInfo}</div>
                    <CardBody className="header">
                        {props.weatherForecast && props.weatherForecast.map((item, index) => <SingleDayForecast weatherData={item} i={index}/>)}
                    </CardBody>
                </Card>
            </Container>
        </>
    )
}