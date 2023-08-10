import React, { useEffect } from 'react'
import { useWeather } from '../Context/WeatherContext'
import { useLocation } from '../Context/LocationContext'


const WeatherDashboard = () => {
    const { weatherData, setWeatherData } = useWeather();
    const { location, setLocation } = useLocation();


    useEffect(() => {
        if (location) {
            const fetchWeatherData = async () => {
                try {
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=${import.meta.env.API_KEY}`);
                    console.log('response', response)
                    const data = await response.json();
                    setWeatherData(data)
                } catch (err) {
                    console.log(err);
                }

            };

            fetchWeatherData();

        }
    }, [location, setWeatherData])

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Weather Dashboard</h2>
            {weatherData ? (
                <div>
                    <p>Location: {weatherData.name}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Weather: {weatherData.weather[0].main}</p>
                </div>
            ) : (
                <p>No weather data available.</p>
            )}
        </div>
    )
}

export default WeatherDashboard