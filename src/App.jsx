import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'



function App() {

  const [latlon, setlatlon] = useState()
  const [weather, setweather] = useState()
  const [temperature, settemperature] = useState()


  const appStyle = {
    backgroundImage : `url("/backgrounds/mundo7.jpeg")`
  }
  
  useEffect(() => {
    const sucess = pos => {
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setlatlon(obj)
    }
    const error = error  => {
      console.log(error)
    }
  
    navigator.geolocation.getCurrentPosition(sucess, error)
  }, [])

  useEffect(()=>{
    if(latlon){
      const apiKey =  "9d30fc1e1d6f12ce8740e480823a1e9e"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apiKey}`
      axios.get(url)
      .then(res =>{
        const celsius = (res.data.main.temp -273.15).toFixed(1)
        const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
        settemperature({celsius, farenheit})
        setweather (res.data)
      })
      .catch(error => console.log(error))
    }
  },[latlon])
  return (
    <div style={appStyle} className="App">
      
      {
        weather?
      <WeatherCard 
      weather = {weather} 
      temperature = {temperature}
      />
      :
      <Loading />
      }
    </div>
  )
}

export default App
