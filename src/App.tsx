import Logo from './imgs/ag-logo_grn-blu.png'
import { MdAltRoute, MdArticle, MdBuildCircle, MdEmail, MdPalette } from 'react-icons/md'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import Resume from './docs/aaron-gertler_resume.pdf'
import { 
  FaBootstrap,
  FaCss3,
  FaFigma, 
  FaHtml5,
  FaLightbulb,
  FaLinux,
  FaPen,
  FaReact,FaUser,
  FaGitlab,
  FaJira,
  FaNpm,
  FaSass,
  FaYarn,
} from 'react-icons/fa6'
import { 
  SiAdobeaftereffects,
  SiAdobeillustrator, 
  SiAdobeindesign, 
  SiAdobelightroom, 
  SiAdobelightroomclassic ,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAntdesign,
  SiFirebase,
  SiJavascript,
  SiMui,
  SiPnpm,
  SiStorybook,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
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

      <div id='skills-container'>
        <div className='skills-container-item'>
          <h2 id='design-skills-target'>Design Skills</h2>
          <ul id='design-skills-list'>
            <li className='skills-item'><SiAdobeaftereffects /> After Effects</li>
            <li className='skills-item'><FaLightbulb /> Branding</li>
            <li className='skills-item'><FaPen /> Copywriting</li>
            <li className='skills-item'><FaFigma /> Figma</li>
            <li className='skills-item'><MdAltRoute /> Journey Mapping</li>
            <li className='skills-item'><SiAdobeillustrator /> Illustrator</li>
            <li className='skills-item'><SiAdobeindesign /> InDesign</li>
            <li className='skills-item'><SiAdobelightroom /> Lightroom</li>
            <li className='skills-item'><SiAdobelightroomclassic /> Lightroom Classic</li>
            <li className='skills-item'><SiAdobephotoshop /> Photoshop</li>
            <li className='skills-item'><SiAdobepremierepro /> Premiere Pro</li>
            <li className='skills-item'><FaUser /> User Testing</li>
          </ul>
        </div>

        <div className='skills-container-item'>
          <h2 id='development-skills-target'>Development Skills</h2>
          <ul id='development-skills-list'>
            <li className='skills-item'><SiAntdesign /> ANT Design</li>
            <li className='skills-item'><FaBootstrap /> Bootstrap</li>
            <li className='skills-item'><FaCss3 /> CSS3</li>
            <li className='skills-item'><SiFirebase /> Firebase</li>
            <li className='skills-item'><AiFillGithub /> GitHub</li>
            <li className='skills-item'><FaGitlab /> GitLab</li>
            <li className='skills-item'><FaHtml5 /> HTML5</li>
            <li className='skills-item'><SiJavascript /> Javascript</li>
            <li className='skills-item'><FaJira /> Jira</li>
            <li className='skills-item'><FaLinux /> Linux</li>
            <li className='skills-item'><FaNpm /> NPM</li>
            <li className='skills-item'><SiMui /> MaterialUI</li>
            <li className='skills-item'><SiPnpm /> PNPM</li>
            <li className='skills-item'><FaReact /> React</li>
            <li className='skills-item'><FaSass /> SASS</li>
            <li className='skills-item'><SiStorybook /> Storybook</li>
            <li className='skills-item'><SiTailwindcss /> Tailwind</li>
            <li className='skills-item'><SiTypescript /> Typescript</li>
            <li className='skills-item'><FaYarn /> Yarn</li>
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
