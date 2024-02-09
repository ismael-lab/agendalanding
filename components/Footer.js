import Image from 'next/image'
import Link from 'next/link'
import EmailIcon from '../public/images/footer/social-icons/email-icon-outline';
import FacebookIcon from '../public/images/footer/social-icons/facebook-icon';
import TwitterIcon from '../public/images/footer/social-icons/twitter-icon';
import InstagramIcon from '../public/images/footer/social-icons/instagram-icon';
import LinkedinIcon from '../public/images/footer/social-icons/linkedin-icon';
import YoutubeIcon from '../public/images/footer/social-icons/youtube-icon';
import PhoneIcon from '../public/images/footer/social-icons/phone-icon-outline';
import ProfileIcon from '../public/images/footer/social-icons/profile.svg';
import CreaYears from '../public/images/footer/crea-65anos.svg';
import CreaJovem from '../public/images/footer/creajovem-light.svg';
import Crea from '../public/images/footer/crea-light.svg';
import LocationIcon from '../public/images/footer/social-icons/location.svg';

const Footer = () => {
    return (
    <>
    <footer>
        <div className="container footer-section p-5 d-flex flex-column flex-md-row justify-content-between align-items-start gap-5 text-blue" id='footer'>

            <div className='d-grid gap-4'>
                <Link className="navbar-brand d-grid d-md-flex gap-4" href="#top">
                    <div className='d-flex gap-3'>
                        <Image src={CreaYears} alt='Crea 65 anos' className='footer-img'></Image>
                        <Image src={Crea} alt='Crea SC' className='footer-img'></Image>
                    </div>
                    <div className='footer-border show-desk'></div>
                    <Image src={CreaJovem} alt='Crea Jovem' className='footer-img'></Image>
                </Link>

                <div className="d-flex gap-3">
                        <Link href={'https://www.facebook.com/creasc'}>
                            <FacebookIcon fill='white'></FacebookIcon>
                        </Link>

                        <Link href={'https://twitter.com/creasc'}>
                            <TwitterIcon fill='white'></TwitterIcon>    
                        </Link>

                        <Link href={'https://www.instagram.com/creascoficial/'}>
                            <InstagramIcon fill='white'></InstagramIcon>
                        </Link>

                        <Link href={'https://www.linkedin.com/company/crea---sc/?originalSubdomain=br'}>
                            <LinkedinIcon fill='white'></LinkedinIcon>
                        </Link>

                        <Link href={'https://www.youtube.com/@creasc'}>
                            <YoutubeIcon fill='white'></YoutubeIcon>
                        </Link>
                        
                </div>
            </div>

            <div className='mx-md-auto'>
                <div className='d-grid gap-2'>
                    <p style={{color:'white'}} className="subtitle fw-bold">Contato</p>
                    <div className="d-flex gap-3 text-white">
                        <Image style={{marginTop:'6px'}} src={ProfileIcon} />
                        <div className="p-0 m-0">Eng. Civil e Seg. do Trab. Caroline Burtet <br /><p style={{fontSize:'14px',marginBottom:'0px'}}>Assessora do CREA-SC</p></div>
                    </div>
                    <div className="d-flex gap-3 text-white">
                        <PhoneIcon></PhoneIcon>
                        <p className="p-0 m-0">(48) 3331-2141</p>
                    </div>
                    <div className="d-flex gap-3">
                        <EmailIcon fill='white'></EmailIcon>
                        <Link href="mailto:creajovem@crea-sc.org.br"><p style={{textDecoration:'underline white'}} className="p-0 m-0">creajovem@crea-sc.org.br</p></Link>
                    </div>
                    <div className="d-flex gap-3 text-white">
                        <Image  src={LocationIcon} />
                        <p className="p-0 m-0">Florianópolis - SC</p>
                    </div>
                </div>
            </div>

        </div>
    </footer>   
    </>
    )
}

export default Footer