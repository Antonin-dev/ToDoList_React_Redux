import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import "./Weather.css";


const Weather = () => {
    // Reducer & state
    const {darkmode} = useSelector(state => state.settingsReducer);
    const [city, setCity] = useState(null);
    const [weatherCity, setWeatherCity] = useState(null)

    //Function
    const handleSubmit = e => {
        e.preventDefault();
        setCity(e.target[0].value);
    }

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const resultFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_TOKEN_WEATHER}&lang=fr`, {
                    method: "GET"
                });
                const result = await resultFetch.json();
                if (result.cod === 200){
                    setWeatherCity({
                        city: result.name,
                        description : result.weather[0]?.description,
                        temperature : {
                            actual : Math.round(result?.main.temp),
                            min : Math.round(result?.main.temp_min),
                            max : Math.round(result?.main.temp_max),
                        }
                    })
                }
            }catch (e){
                console.log("error", e);
            }
        }
        if (city){
            fetchApi();
        }
    }, [city]);

    return (
        <div>
            <div className={`display-txt-zone ${darkmode && 'dark-mode'}`}>
                <form onSubmit={handleSubmit}>
                    <div className="container-search">
                        <label htmlFor="search">Votre ville :</label>
                        <input type="text" id="search"/>
                        <button>Envoyer</button>
                    </div>
                    {weatherCity && (
                        <div className="container-weather">
                            <h2 className="city">{weatherCity.city}</h2>
                            <div className="container-temperature">
                                <div className="cont-weather weather-min">Min : {weatherCity.temperature.min} °C</div>
                                <div className="cont-weather weather-actual">Actual : {weatherCity.temperature.actual} °C</div>
                                <div className="cont-weather weather-max">Max : {weatherCity.temperature.max} °C</div>
                            </div>
                            <div className="container-description">
                                <div className="cont-weather description">{weatherCity.description}</div>
                            </div>

                        </div>
                    )}


                </form>
            </div>
        </div>
    );
};

export default Weather;
