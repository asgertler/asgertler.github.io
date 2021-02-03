import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaEnvelope } from 'react-icons/fa'
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
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href='#resume'>Résumé</Nav.Link>
                        <div className='navBarSocial'>
                            <Nav.Link href='mailto:aarongertler@gmail.com' target='_blank'>
                                <FaEnvelope style={{ marginBottom: '.15rem' }} />
                            </Nav.Link>

                            <Nav.Link href='https://dribbble.com/aarongertler' target='_blank'>
                                <FaDribbble style={{ marginBottom: '.15rem' }} />
                            </Nav.Link>

                            <Nav.Link href='https://github.com/asgertler' target='_blank'>
                                <FaGithub style={{ marginBottom: '.15rem' }} />
                            </Nav.Link>

                            <Nav.Link href='https://www.linkedin.com/in/asgertler/' target='_blank'>
                                <FaLinkedin style={{ marginBottom: '.15rem' }} />
                            </Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}