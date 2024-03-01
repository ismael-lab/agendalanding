import Image from 'next/image'
import Link from 'next/link'
import LogoSebrae from "../public/images/img1.png";
import EmailIcon from '../public/images/footer/social-icons/email-icon-outline';
import FacebookIcon from '../public/images/footer/social-icons/facebook-icon';
import TwitterIcon from '../public/images/footer/social-icons/twitter-icon';
import InstagramIcon from '../public/images/footer/social-icons/instagram-icon';
import LinkedinIcon from '../public/images/footer/social-icons/linkedin-icon';
import YoutubeIcon from '../public/images/footer/social-icons/youtube-icon';
import PhoneIcon from '../public/images/footer/social-icons/phone-icon-outline';
import ProfileIcon from '../public/images/footer/social-icons/profile.svg';
import CreaYears from '../public/images/header/creajovem-dark-color.svg';
import CreaJovem from '../public/images/footer/creajovem-light.svg';
import Crea from '../public/images/footer/crea-light.svg';
import LocationIcon from '../public/images/footer/social-icons/location.svg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="d-flex flex-column-reverse flex-md-row gap-5 align-items-center p-5 h-100">
                    <div className="w-100">
                        <div className='w-100'>
                            <Image src={CreaYears} alt='' className='footer-img'></Image>
                        </div>
                    </div>

                    <div className="w-100 d-flex align-items-end justify-content-center flex-column">
                        <Link id="link-/" onClick={() => onChange('/')} href={'/'} className=' d-flex align-items-end justify-items-end'>contato@tahvago.com.br</Link>
                        <div className="d-flex align-items-center py-2">
                            <p className="m-0">Redes sociais:</p>
                            <div className="d-flex align-items-center">
                                <Link href={'https://www.instagram.com/creascoficial/'} className='px-2'>
                                    <InstagramIcon fill='white'></InstagramIcon>
                                </Link>
                                <Link href={'https://www.linkedin.com/company/crea---sc/?originalSubdomain=br'}>
                                    <LinkedinIcon fill='white'></LinkedinIcon>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='mx-4' />

                <div className="d-flex flex-column-reverse flex-md-row gap-5 align-items-center px-5 py-4">
                    <div className="w-100">
                        <Link href={'https://www.linkedin.com/company/crea---sc/?originalSubdomain=br'} className='px-3'>SOBRE</Link>
                        <Link href={'https://www.linkedin.com/company/crea---sc/?originalSubdomain=br'} className='px-3'>ENTRE EM CONTATO</Link>
                        <Link href={'https://www.linkedin.com/company/crea---sc/?originalSubdomain=br'} className='px-3'>POLITICA DE PRIVACIDADE</Link>
                    </div>

                    <div className="w-100 d-flex align-items-end justify-content-center flex-column">
                        <p>Copyright © 2024 • Tahvago.</p>
                    </div>
                </div>

            </footer>

        </>
    )
}

export default Footer