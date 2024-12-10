import React from 'react'
import ReactDOM from 'react-dom/client'
import Video from './Video'
import Navbar from './Navbar'
import Presentation from './Presentation'
import { Services } from './Services'
import Partners from './Partners'
import Contact from './Contact'
import Footer from './Footer'
import './general.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Video />
    <Presentation />
    <Services />
    <Contact />
    <Partners />
    <Footer />
  </React.StrictMode>,
)
