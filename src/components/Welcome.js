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
                <Col className='welcomeSides d-none d-xl-block' xl={{ span: 3 }}>
                    <img src={Avatar} alt='avatar' id='avatar' />
                </Col>

                <Col className="welcomeSides" xl={{ span: 9 }}>
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

                    <h4>I use UI/UX to build the front-end.</h4>

                    <p className='d-none d-md-block'>

                    </p>
                </Col>
            </Row>
        </Container>
    )
}