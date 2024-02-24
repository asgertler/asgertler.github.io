import Logo from './imgs/ag-logo_grn-blu.png'
import { MdArticle, MdBuildCircle, MdEmail, MdPalette } from 'react-icons/md'
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
            <li className='header-nav-list-item'><MdArticle className='header-nav-list-item-icon' />Résumé</li>
            <li id='header-nav-list-item-contact' className='header-nav-list-item'>
              <MdEmail className='header-nav-list-item-icon' />Contact
            </li>
          </ul>
        </div>
      </div>

      <div id='footer'>
        Copyright © {currentYear} Aaron Gertler. All Rights Reserved.
      </div>
    </>
  )
}

export default App
