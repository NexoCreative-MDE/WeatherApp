import { useState, useEffect } from "react";
import capitalize from "../utils/capitalize";
import './css/weatherCard.css'

const WeatherCard = ({weather, temp, searchQuery, setSearchQuery, handleSearch}) => {
    
    console.log(weather);
    
    const [isCelsius, setIsCelsius] = useState(true)
    
    const handleChangeTemp = () => setIsCelsius(!isCelsius)
  return (
    <article className="w">
        <header className="w__header">
            <h1 className="w__title">Weather App</h1>  
            <h3 className="w__subtitle">{weather?.name}, {weather?.sys.country}</h3>  
        </header>
        <div className="search__container">
            <input className="input__search"
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by city"
            />
        <button className="search__btn" onClick={handleSearch}>Search</button>
      </div>
        <section className="w__body">
            <div className="w__icon">
                <img src={weather ?`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png` : ''} alt="" />
            </div>
            <div className="w__info">
                <h4 className="w__info-title">"{capitalize(weather?.weather[0].description)}"</h4>
                <ul className="w__list">
                    <li className="w__list-item">
                        <span className="w__list-label">Wind Speed:</span>
                        <span className="w__list-value">{weather?.wind.speed} m/s</span>
                    </li>
                    <li className="w__list-item">
                        <span className="w__list-label">Clouds:</span>
                        <span className="w__list-value">{weather?.clouds.all} %</span>
                    </li>
                    <li className="w__list-item">
                        <span className="w__list-label">Pressure:</span>
                        <span className="w__list-value">{weather?.main.pressure} hPa</span>
                    </li>
                </ul>
            </div>
        </section>
        <footer className="w__footer">
            <h2 className="w__temp">{isCelsius ? `${temp?.celsius} °C` : `${temp?.farenheit} °F`}</h2>
            <button className="w__btn" onClick={handleChangeTemp}>Change to {isCelsius ? '°F' : '°C'}</button>
        </footer>
    </article>
  )
}

export default WeatherCard