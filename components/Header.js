import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/header/creajovem-dark-color.svg'
import BurguerIcon from '../public/images/header/menu.svg'
import { useState, useEffect } from 'react'

export default function Header() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };

        handleResize(); // Chama a função uma vez para definir o estado inicial
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg header ${isMobile ? 'mobile' : ''}`}>
            <div className="container">

                <Link href={'/'}>
                    <Image src={Logo} className='logo' alt="Logo" />
                </Link>

                {!isMobile && (<div id="navbarNav">
                    <ul className="navbar-nav ms-auto  me-auto  py-3 py-md-4">
                        <li className="nav-item">
                            <Link id="link-/" onClick={() => onChange('/queroReservar')} href={'/queroReservar'}className='nav-border px-3'>Quero cadastrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="link-/times" onClick={() => onChange('/queroCadastrar')} href={'/queroCadastrar'}  className='nav-border px-3'>Quero reservar</Link>
                        </li>
                    </ul>
                </div>)}
 
                <button>Entrar na plataforma</button>

              
  
                {isMobile ? (

                    <div className="mobile-links navbar-nav ms-auto  me-auto  ">
                        <ul className="d-flex justify-self-center">
                        <li className="nav-item">
                            <Link id="link-/" onClick={() => onChange('/queroReservar')} href={'/queroReservar'}className='nav-border px-3'>Quero cadastrar</Link>
                        </li>
                        <li className="nav-item">
                            <Link id="link-/times" onClick={() => onChange('/queroCadastrar')} href={'/queroCadastrar'}  className='nav-border px-3'>Quero reservar</Link>
                        </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </nav>
    );
}
