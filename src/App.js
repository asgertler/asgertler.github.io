import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { NavBar } from './components/NavBar'
import { Welcome } from './components/Welcome'
import { Design } from './components/Design'
import { Tech } from './components/Tech'
import { Footer } from './components/Footer'
import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />

      <Welcome />

      <Container id='skillsContainer'>
        <Row>
          <Tech />
          <Design />
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
