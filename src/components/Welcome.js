import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Typewriter from 'typewriter-effect'

import Avatar from '../img/ag-avatar.png'

import './Welcome.scss'

export const Welcome = () => {
    return (
        <Container id='welcomeContainer'>
            <Row id='welcomeRow'>
                <Col className='welcomeSides d-none d-md-block' sm={{ span: 3, order: 'last' }}>
                    <img src={Avatar} alt='avatar' id='avatar' />
                </Col>

                <Col className="welcomeSides" sm={{ span: 9, order: 'first' }}>
                    <h2>
                        <span>Hi, I'm </span>

                        <Typewriter
                            options={{
                                strings: ['Aaron', 'a Creator', 'a Designer', 'a Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>

                    <h5>I focus on the front-end & UI/UX</h5>

                    <p>I build human-centric applications.</p>
                </Col>
            </Row>
        </Container>
    )
}