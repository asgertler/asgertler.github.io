import Container from 'react-bootstrap/Container'
import Typewriter from 'typewriter-effect'

import './Welcome.scss'

export const Welcome = () => {
    return (
        <Container id='welcomeContainer'>
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
        </Container>
    )
}