import Title from './Title'
import { useRef, useEffect, useState } from 'react'
import './general.css'


function Contact() {
    const section = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

    const options = {
        root: null,
        rootMargin: "5px",
        threshold: 0.3
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
        <section id='contact' ref={section} className={isVisible ? "show my-4" : "hidden my-4"}>
            <div className='container text-center'>
                <Title title='CONTACTO' />
                <div className='row'>
                    <div className='col-md-4 col-sm-12 my-4'>
                        <div className="card shadow">
                            <div className="card-header bg-instagram">
                                <a className='logo-link' href="https://www.instagram.com/josealbertoberloni/"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title cursor-default">¡Mira nuestras últimas fotos!</h5>
                                <p className="card-text cursor-default">En mi Instagram encontrarás interesantes fotos sobre las experiencias de mis clientes. ¡Únete junto a mis más de 4.500 seguidores!</p>
                                <a href="https://www.instagram.com/josealbertoberloni/" className="btn btn-primary">Ir a <i className="fa-brands fa-instagram"></i> josealbertoberloni</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 my-4'>
                        <div className="card shadow">
                            <div className="card-header bg-whatsapp">
                                <a className='logo-link' href="https://wa.me/543455087867?text=Hola,%20estoy%20interesado%20en%20hacer%20una%20reserva"><i className="fa-brands fa-whatsapp"></i></a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title cursor-default">Escríbeme para hacer tu reserva</h5>
                                <p className="card-text cursor-default">No dudes en escribirme para organizar tu aventura. Te contestaré lo más pronto posible.</p>
                                <a href="https://wa.me/543455087867?text=Hola,%20estoy%20interesado%20en%20hacer%20una%20reserva" className="btn btn-primary">Abrir  <i className="fa-brands fa-whatsapp"></i> WhatsApp</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 my-4'>
                    <div className="card shadow">
                            <div className="card-header bg-youtube">
                                <a className='logo-link' href="https://www.youtube.com/@doradosenconcordia5243"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title cursor-default">Descubre mi canal</h5>
                                <p className="card-text cursor-default">Visita mi canal y encontrarás interesantes videos de algunas de mis experiencias, cada vez somos más gente.</p>
                                <a href="https://www.youtube.com/@doradosenconcordia5243" className="btn btn-primary">Ir a <i className="fa-brands fa-youtube"></i> Dorados en Concordia</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    
}

export default Contact