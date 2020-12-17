import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../img/ag-logo_clr.svg';
import { FaDribbble } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './NavBar.scss'

export const NavBar = () => {
    return (
        <Container>
            <Navbar expand='lg' variant='light' bg='light' id='mainNav'>
                <Navbar.Brand href='#' className='navBarLogo'>
                    <img
                        alt=""
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />

                    <h1 id='myName'>Aaron Gertler</h1>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#development">Development</Nav.Link>
                        <Nav.Link href="#design">Design</Nav.Link>
                        <div className='navBarSocial'>
                            <Nav.Link href='#github'><FaGithub /></Nav.Link>
                            <Nav.Link href='#dribbble'><FaDribbble /></Nav.Link>
                            <Nav.Link href='#linkedin'><FaLinkedin /></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}