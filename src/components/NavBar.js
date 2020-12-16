import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../img/ag-logo_clr.svg';
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
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}