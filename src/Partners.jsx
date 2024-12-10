import Title from './Title'
import dakota from './assets/images/dakota.png'
import payo from './assets/images/payo.png'
import imperio from './assets/images/imperiopesca.jpg'
import buscando from './assets/images/buscandopique.png'
import termal from './assets/images/termaldellago.png'
import { useRef, useEffect, useState } from 'react'
import './general.css'

function Galery() {
    const section = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

    const options = {
        root: null,
        rootMargin: "5px",
        threshold: 0.4
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries
            setIsVisible(entry.isIntersecting)
        }, options)

        if (section.current) observer.observe(section.current)

        return () => {
            if(section.current) observer.unobserve(section.current)
        }
    }, [section, options])


    return (
        <section id='partners' ref={section} className={isVisible ? "show my-4" : "hidden my-4"}>
            <div className='container text-center my-4'>
                <Title title='SOCIOS'/>
                <div id="carouselExampleSlidesOnly" className="carousel slide my-5" data-bs-ride="carousel">
                    <img src={dakota} className="rounded mx-2" alt="..." width={300} height={100}/>
                    <img src={payo} className="rounded mx-2" alt="..." width={300} height={100}/>
                    <img src={imperio} className="rounded mx-2" alt="..." width={200} height={200}/>
                    <img src={buscando} className="rounded mx-2" alt="..." width={200} height={200}/>
                    <img src={termal} className="rounded mx-2" alt="..." width={200} height={200}/>
                </div>
            </div>
        </section>
    )
}

export default Galery