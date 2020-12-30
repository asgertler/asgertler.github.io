import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { FaDribbble } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import './Footer.scss'

let today = new Date()
let year = today.getFullYear()

export const Footer = () => {
    return (
        <Container id='footerContainer'>
            <Navbar expand='lg' variant='light' bg='light' sticky='bottom' id='footer'>
                <Nav className='ml-auto mr-auto'>
                    <Navbar.Text id='copyright'>
                        Copyright © {year} Aaron Gertler.
                    </Navbar.Text>

                    <Nav.Link id='footerDribbble' href='https://dribbble.com/aarongertler' target='_blank'>
                        <FaDribbble style={{ marginBottom: '.15rem' }} />
                    </Nav.Link>

                    <Nav.Link id='footerGithub' href='https://github.com/asgertler' target='_blank'>
                        <FaGithub style={{ marginBottom: '.15rem' }} />
                    </Nav.Link>

                    <Nav.Link id='footerLinkedin' href='https://www.linkedin.com/in/asgertler/' target='_blank'>
                        <FaLinkedin style={{ marginBottom: '.15rem' }} />
                    </Nav.Link>
                </Nav>
            </Navbar>
        </Container >
    )
}