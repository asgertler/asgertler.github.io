import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { FaBootstrap } from 'react-icons/fa'

import './Tech.scss'

export const Tech = () => {
    return (
        <Container id='techContainer'>
            <Row>
                <Col className='techList'>
                    <h4>Technological Skills</h4>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Bootstrap
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> CSS3
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Firebase
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> GitHub
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> HTML5
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Javascript
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Linux
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Node.js
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> React
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> SASS
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> SemanticUI
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> VSCode
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Wordpress
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaBootstrap /> Wrike
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}