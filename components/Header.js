import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/images/header/creajovem-dark-color.svg'
import BurguerIcon from '../public/images/header/menu.svg'
import { isMobile } from 'react-device-detect'
import { useRef, useState } from 'react'

export default function Header (){


    const [openMenu,setMenuOpen] = useState()
    const ref = useRef()
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const openMenuClick = () => {

        if(openMenu){
            setMenuOpen(false)
        }else{
            setMenuOpen(true)
        }
    }
    const onChange = (current) => {

        if(!isMobile) return;
        
        ref.current.click()
    }   

    return(
        <>
        <nav className="navbar navbar-expand-lg header">
            <div className="container">
                <Link  href={'/'}><Image src={Logo} className='logo'></Image></Link>
                
                <div id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-4 gap-md-0 py-3 py-md-4">
                        <li className="nav-item"><Link id = "link-/" onClick={() => onChange('/')} href={'/'} className='nav-border px-3'>Quero cadastrar</Link></li>
                        <li className="nav-item"><Link id = "link-/times" onClick={() => onChange('/times')} href={'/times'} className='nav-border px-3'>Quero reservar</Link></li>
                        
                    </ul>
                </div>
                <button>Entrar na plataforma</button>
            </div>
        </nav>
        </>
    )
}