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
import CreaYears from '../public/images/header/creajovem-dark-color.svg';
import CreaJovem from '../public/images/footer/creajovem-light.svg';
import Crea from '../public/images/footer/crea-light.svg';
import LocationIcon from '../public/images/footer/social-icons/location.svg';

const Footer = () => {
    return (
    <>
    <footer>
        <div className="container footer-section p-5 d-flex flex-row flex-md-row justify-content-between align-items-start gap-5 text-blue" id='footer'>

            <div className='d-grid gap-4'>
                
                <Image src={CreaYears} alt='Crea 65 anos' className='footer-img'></Image>
                    
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

        </div>
    </footer>   
    </>
    )
}

export default Footer