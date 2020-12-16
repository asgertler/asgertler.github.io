import Container from 'react-bootstrap/Container'
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

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}