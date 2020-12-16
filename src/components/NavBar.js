import Navbar from 'react-bootstrap/Navbar'
import Logo from '../img/ag-logo_clr.svg';
import './NavBar.scss'

export const NavBar = () => {
    return (
        <Navbar fixed='top' bg='dark' variant='dark' className="navBar">
            <img src={Logo} alt='logo' className='navBarLogo' />

            <div className="navBarName">
                <h1>Aaron Gertler</h1>
                <h4>UI/UX Designer & Front-End Developer</h4>
            </div>
        </Navbar>
    )
}