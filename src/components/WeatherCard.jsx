import React from 'react'
import { useState } from 'react'

const WeatherCard = ({weather, temperature}) => {

    const [isCelsius, setisCelsius] = useState(true)

    //console.log(weather)
    //console.log(temperature)

    const handleChangeTemperature = () => setisCelsius(!isCelsius)
    console.log(weather)

    return (
        <div>
    <article className='app__datos '>
        <h1>Weather App</h1>
        <form className='input'>
        <input number="paises" />
        <button>send</button>
        </form>
        <h2>{weather?.name}, {weather?.sys.country}</h2>
        <section>
            <header>
                <img src={` https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}alt="" />
                <article>
                <h3>Clouds: "{weather?.weather[0].description}"</h3>
                <ul className='menu'>
                    <li className='munu_app' ><span>Wind Speed: </span><b>{weather?.wind.speed}m/s</b></li>
                    <li className='munu_app' ><span>Clouds: </span><b>{weather?.clouds.all}%</b></li>
                    <li className='munu_app' ><span>Pressure: </span><b>{weather?.main.pressure}hPa</b></li>
                </ul> 
            </article>
            </header>
        </section>
        <footer>
            <h2>
                {
                    isCelsius
                    ? `${temperature?.celsius}  ºC`
                    : `${temperature?.farenheit}  ºF`
                }
            </h2>
            <h3>
                <button  onClick={handleChangeTemperature}>Change to {isCelsius ? 'ºF':'ºC'}
                </button>
            </h3>
            
        </footer>
    </article>
    </div>
    )
}

export default WeatherCard