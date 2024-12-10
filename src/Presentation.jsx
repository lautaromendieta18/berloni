import { useEffect, useState, useRef } from 'react'
import berloni from './assets/berloni.png'
import Title from './Title'
import './general.css'
import './content.css'


function Presentation() {
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
        <div id="presentation" className="container text-center my-4">
            <section ref={section} className={isVisible ? "show" : "hidden"}>
                <Title className='titulo' title='JOSÉ BERLONI, GUÍA DE PESCA' />
                <div className='row'>
                <div className='col-md-4 col-sm-12 d-flex justify-content-center'>
                    <img src={berloni} alt='...' width='220' height='220' className='rounded-circle sombra-izq my-4'/>
                </div>
                <div className='col-md-5 col-sm-12 my-5 d-flex justify-content-center'>
                    <p className='texto-ligero my-4'> Mi nombre es José Berloni. Vivo en Concordia, Entre Ríos, <strong>llevo pescando más de 30 años</strong>. Quiero invitarte a que vivas la experiencia única de la pesca del dorado. Por su geografía, el río Uruguay requiere de un experto para su navegación.</p></div>
                </div>
            </section>
        </div>
    )
}

export default Presentation