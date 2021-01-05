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

                    <h4>I build the front-end with a focus on UI/UX.</h4>

                    <p className='d-none d-md-block'>
                        Before beginning down the road to becoming a front-end developer,
                        I spent many years as a multimedia designer working in a number of
                        various industries. The creative field gave me many opportunities to
                        collaborate and work in a team-based environment while solving all sorts
                        of visual and interactive challenges. I have always had a strong interest
                        in technology and user interaction, and development spoke to me as a career
                        where I could combine my love of design with even more logical problem solving
                        and practical solutions to provide high-quality experiences to users.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}