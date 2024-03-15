import React, {useState} from "react";
import { SearchBar } from "./SearchBar";
import { WeatherForecast } from "./DisplayWeather";

export default function WeatherMap(){
    const [input, setInput] = useState("")
    const [weatherForecast, setWeatherForecast] = useState({});
    
    const baseURL = "https://api.openweathermap.org/"
    const appid = "0d0fddeab44b7e1744c3e3034d1e8e96"

    const cityData = async function(){
        try{
            const response = await fetch(`${baseURL}data/2.5/forecast?q=${input}&appid=${appid}`)
            if(!response.ok){
                throw new Error("Network response is not ok")
            }
            const jsonData = await response.json()
            const weatherData = jsonData?.list
            const weather = [weatherData[0], weatherData[8], weatherData[16], weatherData[24], weatherData[32]];
            const weatherForecast = {
                cityDetails: `${jsonData?.city.name}, ${jsonData?.city.country}`,
                weather: weather
            }
            setWeatherForecast(weatherForecast);
        }catch(error){
            console.error("Error:", error)
        }
    }
    return (
        <>
            <SearchBar
                input={input}
                setInput={setInput}
                cityData={cityData}
            />
            {weatherForecast.weather && (<WeatherForecast
                weatherForecast={weatherForecast.weather}
                cityInfo={weatherForecast.cityDetails}
            />)}
        </>
    )
}