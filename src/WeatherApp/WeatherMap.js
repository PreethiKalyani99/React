import React, {useState} from "react";
import { SearchBar } from "./SearchBar";
import { DisplayWeather } from "./DisplayWeather";

export function WeatherMap(){
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [cityInfo, setCityInfo] = useState('')
    const baseURL = "https://api.openweathermap.org/data/2.5/forecast?q="
    const appid = "0d0fddeab44b7e1744c3e3034d1e8e96"

    const cityData = async function(){
        try{
            const response = await fetch(`${baseURL}${input}&appid=${appid}`)
            if(response){
                const jsonData = await response.json()
                const weather_data = jsonData?.list
                setCityInfo(`${jsonData?.city.name}, ${jsonData?.city.country}`)
                setData([weather_data[0], weather_data[8], weather_data[16], weather_data[24], weather_data[32]])
            }
            else{
                throw new Error('Failed to fetch data')
            }
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
            <DisplayWeather
                weatherForecast={data}
                cityInfo={cityInfo}
            />
        </>
    )
}