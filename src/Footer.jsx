import logo from './assets/images/muchoojo.png'
import './general.css'

function Footer() {
    return (
        <footer className='text-center bg-berloni footer'>
            <div className='container text-center mt-4'>
                <div className='row'>
                    <div className='col-6'>
                        <h6>José Berloni</h6>
                        <ul className='ms-5 text-start'>
                        <a className='logo-link' href='https://www.instagram.com/josealbertoberloni/'><li><i className="fa-brands fa-instagram"></i> Instagram</li></a>
                        <a className='logo-link' href='https://www.facebook.com/josealberto.berloni'><li><i className="fa-brands fa-square-facebook"></i> Facebook</li></a>
                        <a className='logo-link' href='https://www.youtube.com/@doradosenconcordia5243'><li><i className="fa-brands fa-youtube"></i> Youtube</li></a>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <h6>muchoojo</h6>
                        <ul className='ms-5 text-start'>
                        <a className='logo-link' href='https://www.instagram.com/muchoojoimagen/?hl=es-la'><li><i className="fa-brands fa-instagram"></i> Instagram</li></a>
                            <li><i className="fa-solid fa-earth-americas"></i> Página Web</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <a href='https://www.instagram.com/muchoojoimagen/'>
                   <img src={logo} alt='...' width='250'/> 
                </a>
                <span className='d-block cursor-default texto-ligero'>Copyright © 2023 muchoojo</span>
                <a className="logo-link d-block texto-ligero" href='https://www.instagram.com/lautaromendieta0/'>Lautaro M. Mendieta, Web Developer</a>
            </div>
            
        </footer>
    )
}

export default Footer