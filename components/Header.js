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
        <nav className="navbar navbar-expand-lg header fixed-top">
            <div className="container">
                <Link  href={'/'}><Image src={Logo} className='logo'></Image></Link>
                <button ref={ref} onClick={handleNavCollapse}  id='navbar-button' className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation">
                    <Image src={BurguerIcon}></Image>
                </button>
                
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}  id="navbarNav">
                    <ul className="navbar-nav ms-auto gap-4 gap-md-0 py-3 py-md-4">
                        <li className="nav-item"><Link id = "link-/" onClick={() => onChange('/')} href={'/'} className='nav-border px-3'>Home</Link></li>
                        <li className="nav-item"><Link id = "link-/times" onClick={() => onChange('/times')} href={'/times'} className='nav-border px-3'>Times</Link></li>
                        <li className="nav-item"><Link id = "link-/#produtos" onClick={() => onChange('/#produtos')} href={'/#produtos'} className='nav-border px-3'>Produtos</Link></li>
                        <li className="nav-item"><Link id = "link-/inscricao" onClick={() => onChange('/inscricao')} href={'/inscricao'} className='nav-border px-3'>Inscrição</Link></li>
                        <li className="nav-item"><Link id = "link-#footer" onClick={() => onChange('#footer')} href={'#footer'} className='nav-border px-3'>Contato</Link></li>
                        <li className="nav-item"><Link onClick={() => onChange('/')} href='https://inovacao.crea-sc.org.br/programas-creasc' target='_blank' className='nav-border px-3'>Programas</Link></li>
                        <li className="nav-item"><Link onClick={() => onChange('/')} href='https://inovacao.crea-sc.org.br/capacitacao?site=CREAJovem' target='_blank' className='px-3'>Capacitação</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}