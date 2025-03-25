import { Header } from './components/Header/Header'
import { Button } from './components/Button/Button'
import { Footer } from './components/Footer/Footer'
import Resume from './docs/aaron-gertler_resume.pdf'
import { AiFillGithub } from 'react-icons/ai'
import { FaFileDownload, } from 'react-icons/fa'
import { 
  FaBitbucket,
  FaBootstrap,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaLightbulb,
  FaLinux,
  FaPen,
  FaReact,
  FaUser,
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
import Alabama from './imgs/interests/alabama.svg'
import Barons from './imgs/interests/barons.svg'
import Baseball from './imgs/interests/baseball.svg'
import Basketball from './imgs/interests/basketball.svg'
import Beer from './imgs/interests/beer.svg'
import Braves from './imgs/interests/braves.svg'
import DIY from './imgs/interests/diy.svg'
import DragonCon from './imgs/interests/dragoncon.svg'
import Football from './imgs/interests/football.svg'
import Gaming from './imgs/interests/gaming.svg'
import Golf from './imgs/interests/golf.svg'
import Hockey from './imgs/interests/hockey.svg'
import Homelab from './imgs/interests/homelab.svg'
import Kayak from './imgs/interests/kayak.svg'
import Legion from './imgs/interests/legion.svg'
import NashSC from './imgs/interests/nash-sc.svg'
import Photo from './imgs/interests/photo.svg'
import Pizza from './imgs/interests/pizza.svg'
import Preds from './imgs/interests/preds.svg'
import Sounds from './imgs/interests/sounds.svg'
import Stallions from './imgs/interests/stallions.svg'
import Terps from './imgs/interests/terps.svg'
import Titans from './imgs/interests/titans.svg'
import Travel from './imgs/interests/travel.svg'
import './App.sass'
import { MdAltRoute } from 'react-icons/md'

function App() {
  function openResume() {
      window.location.href = Resume
  }

  return (
    <>
      <Header />

      <div id='hero-container'>
        <h2>UI/UX Designer</h2>
        <h2>Front-End Developer</h2>
      </div>

      <div id='skills-container'>
        <div className='skills-container-item'>
          <h2 id='design-skills-target'>Design Skills //</h2>
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
          <h2 id='development-skills-target'>Development Skills //</h2>
          <ul id='development-skills-list'>
            <li className='skills-item'><SiAntdesign /> ANT Design</li>
            <li className='skills-item'><FaBitbucket /> Bitbucket</li>
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

      <div className='section-break'></div>

      <div id='resume-container'>
        <div id='resume-header'>
          <h2 id='resume-title'>Résumé //</h2>
          <Button label='Download' icon={<FaFileDownload />} onClick={() => openResume()} />
        </div>
      </div>

      <div className='section-break'></div>

      <div className='interests-container'>
        <h2 id='interests-title'>Interests //</h2>
        <ul id='interests-list'>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#990000'}}>
            <img src={Alabama} alt='Alabama' className='interests-icon' /> Alabama
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#231f20'}}>
            <img src={Barons} alt='Barons' className='interests-icon' /> Barons
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#2980B9'}}>
            <img src={Baseball} alt='Baseball' className='interests-icon' /> Baseball
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#D35400'}}>
            <img src={Basketball} alt='Basketball' className='interests-icon' /> Basketball
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#13274F'}}>
            <img src={Braves} alt='Braves' className='interests-icon' /> Braves
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#F39C12'}}>
            <img src={Beer} alt='Craft Beer' className='interests-icon' /> Craft Beer
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#2ECC71'}}>
            <img src={DIY} alt='DIY' className='interests-icon' /> DIY
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#8E44AD'}}>
            <img src={DragonCon} alt='Dragon Con' className='interests-icon' /> Dragon Con
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#964B00'}}>
            <img src={Football} alt='Football' className='interests-icon' /> Football
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#E74C3C'}}>
            <img src={Gaming} alt='Gaming' className='interests-icon' /> Gaming
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#1ABC9C'}}>
            <img src={Golf} alt='Golf' className='interests-icon' /> Golf
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#2C3E50'}}>
            <img src={Hockey} alt='Hockey' className='interests-icon' /> Hockey
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#34495E'}}>
            <img src={Homelab} alt='Homelab' className='interests-icon' /> Homelab
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#3498DB'}}>
            <img src={Kayak} alt='Kayaking' className='interests-icon' /> Kayaking
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#9f8a59'}}>
            <img src={Legion} alt='Legion FC' className='interests-icon' /> Legion FC
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#E03a3e'}}>
            <img src={Terps} alt='Maryland' className='interests-icon' /> Maryland
          </li>
          <li className='interests-item' style={{ color: '#1F1646', backgroundColor: '#ECE83A'}}>
            <img src={NashSC} alt='Nashville SC' className='interests-icon' /> Nashville SC
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#241c15'}}>
            <img src={Photo} alt='Preds' className='interests-icon' style={{ height: '1rem' }} /> Photography
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#e74c3c'}}>
            <img src={Pizza} alt='Pizza' className='interests-icon' /> Pizza
          </li>
          <li className='interests-item' style={{ color: '#041E42', backgroundColor: '#FFB81C'}}>
            <img src={Preds} alt='Preds' className='interests-icon' /> Preds
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#071D49'}}>
            <img src={Sounds} alt='Sounds' className='interests-icon' /> Sounds
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#a32035'}}>
            <img src={Stallions} alt='Stallions' className='interests-icon' /> Stallions
          </li>
          <li className='interests-item' style={{ color: 'white', backgroundColor: '#4B92DB'}}>
            <img src={Titans} alt='Titans' className='interests-icon' /> Titans
          </li>
          <li className='interests-item' style={{ color: '#f2f2f2', backgroundColor: '#2ECC71'}}>
            <img src={Travel} alt='Titans' className='interests-icon' /> Travel
          </li>
        </ul>
      </div>

      <Footer />
    </>
  )
}

export default App
