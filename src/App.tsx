import Logo from './imgs/ag-logo_grn-blu.png'
import { MdArticle, MdBuildCircle, MdEmail, MdPalette } from 'react-icons/md'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Resume from './docs/aaron-gertler_resume.pdf'
import './App.sass'

function App() {

  const currentYear = new Date().getFullYear()

  return (
    <>
      <div id='header-container'>
        <div id='header-logo-name'>
          <img src={Logo} alt='Aaron Gertler logo' id='header-logo' />
          <h1>Aaron Gertler</h1>
        </div>

        <div id='header-nav'>
          <ul id='header-nav-list'>
            <li className='header-nav-list-item'><MdPalette className='header-nav-list-item-icon' /> Design</li>
            <li className='header-nav-list-item'><MdBuildCircle className='header-nav-list-item-icon' />Development</li>
            <li className='header-nav-list-item'><a href={Resume} target='_blank'><MdArticle className='header-nav-list-item-icon' />Résumé</a></li>
            <li id='header-nav-list-item-contact' className='header-nav-list-item'>
              <MdEmail className='header-nav-list-item-icon' />Contact
            </li>
          </ul>
        </div>
      </div>

      <div id='footer'>
        <div id='footer-copyright'>
          Copyright © {currentYear} Aaron Gertler. All Rights Reserved.
        </div>

        <ul id='footer-socials'>
          <li className='footer-socials-icon' onClick={() => window.open('https://www.instagram.com/aaron.gertler/')}><AiFillInstagram /></li>
          <li className='footer-socials-icon' onClick={() => window.open('https://github.com/asgertler')}><AiFillGithub /></li>
          <li className='footer-socials-icon' onClick={() => window.open('https://www.linkedin.com/in/asgertler/')}><AiFillLinkedin /></li>
        </ul>
      </div>
    </>
  )
}

export default App
