import image from "./assets/berlonilogo.png"
import { useEffect, useState } from 'react'
import './general.css'

function Navbar() {
  const [temperatura, setTemperatura] = useState([])
  const [clima, setClima] = useState([])

  useEffect(() => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Concordia&appid=bd066c63210a4a87628a9358fe7ee39d&units=metric')
      .then(response => response.json())
      .then(data => {
          const { main, name, sys, weather } = data
          const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
          setTemperatura(" " + Math.round(data.main.temp) + "ºC")
          setClima(icon)
      })
  }, [])
  
  return (
    <nav className="navbar sombra navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex">
        <a className="navbar-brand" href="#">
          <img className="logo rounded-circle" src={image} alt="..." width="100"/>  
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#presentation">GUÍA DE PESCA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">SERVICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">CONTACTO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#partners">SOCIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="#"><i className="fa-solid fa-temperature-three-quarters"></i>{temperatura}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-current="page" href="#"><img src={clima} width={30} height={30} alt="0"/></a>
            </li>
          </ul>
      </div>
      </div>
      
    </nav>
  )
}

export default Navbar

