import Title from './Title'
import { useEffect, useRef, useState } from 'react'
import './general.css'


export function Services() {
    const section = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

    const options = {
        root: null,
        rootMargin: "5px",
        threshold: 0.5
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
        <section id='services' ref={section} className={isVisible ? "show my-4" : "hidden my-4"}>
            <div className='container text-center'>
                <Title title='SERVICIOS' />
                <p className='cita'>“Sacamos bogas, sacamos dorados... le recomendamos a José, vengan a pescar con él, es el mejor pescador de Concordia.”</p>
                <div className='row my-4'>
                    <div className='col-md-6 col-sm-12'>
                        <h5 className='titulo'>ORGANIZACIÓN</h5>
                        <ul className='text-start ms-5 p-4'>
                            <li className='item'>
                                <i className='fa-regular fa-clipboard ps-6 me-2'></i>
                                Organizamos tu excursión de pesca y también tu estadía.
                            </li>
                            <li className='item'>
                                <i className='fa-regular fa-clipboard ps-6 me-2'></i>
                                Descuentos en alojamientos, hoteles y complejos termales.
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <h5 className='titulo'>PESCA</h5>
                        <ul className='text-start ms-5 p-4'>
                            <li className='item'>
                                <i className='fa-sharp fa-solid fa-fish me-2'></i>
                                Pesca embarcada.
                            </li>
                            <li className='item'>
                                <i className='fa-sharp fa-solid fa-fish me-2'></i>
                                Conocimiento de la geografía local.
                            </li>
                            <li className='item'>
                                <i className='fa-sharp fa-solid fa-fish me-2'></i>
                                Conocimiento de las especies.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}