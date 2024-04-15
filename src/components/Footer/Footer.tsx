import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineDribbble, } from 'react-icons/ai'
import './footer.sass'

export const Footer = () => {
    const appVersion: string = APP_VERSION
    const currentYear: number = new Date().getFullYear()

    return (
        <footer>
            <div id='copyright'>
                <div id='version'>v{appVersion}</div>
                Copyright © {currentYear} Aaron Gertler. All Rights Reserved.
            </div>

            <ul id='socials'>
                <li className='socials-icon' onClick={() => window.open('https://dribbble.com/aarongertler')}><AiOutlineDribbble /></li>
                <li className='socials-icon' onClick={() => window.open('https://github.com/asgertler')}><AiFillGithub /></li>
                <li className='socials-icon' onClick={() => window.open('https://www.instagram.com/aaron.gertler/')}><AiFillInstagram /></li>
                <li className='socials-icon' onClick={() => window.open('https://www.linkedin.com/in/asgertler/')}><AiFillLinkedin /></li>
            </ul>
        </footer>
    )
}