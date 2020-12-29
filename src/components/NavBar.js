import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaDribbble } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Logo from '../img/ag-logo_clr.svg'
import './NavBar.scss'

export const NavBar = () => {
    return (
        <Container id='navBarContainer'>
            <Navbar expand='lg' variant='light' bg='light' id='mainNav' sticky='top'>
                <Navbar.Brand href='#' className='navBarLogo' id='logoLink'>
                    <img src={Logo} alt='logo' className='d-inline-block align-top'
                        height='40px' width='auto'
                    />

                    <h1 id='myName'>Aaron Gertler</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#design">Design</Nav.Link>
                        <Nav.Link href="#development">Development</Nav.Link>
                        <div className='navBarSocial'>
                            <Nav.Link href='https://dribbble.com/aarongertler' target='_blank'><FaDribbble /></Nav.Link>
                            <Nav.Link href='https://github.com/asgertler' target='_blank'><FaGithub /></Nav.Link>
                            <Nav.Link href='https://www.linkedin.com/in/asgertler/' target='_blank'><FaLinkedin /></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}