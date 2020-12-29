import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { SiBootstrap } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiLinux } from 'react-icons/si'
import { SiNodeDotJs } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import { SiSellfy } from 'react-icons/si'
import { SiVisualstudiocode } from 'react-icons/si'
import { SiWordpress } from 'react-icons/si'
import { FaCheck } from 'react-icons/fa'

import './Tech.scss'

export const Tech = () => {
    return (
        <Container id='techContainer'>
            <Row>
                <Col className='techList'>
                    <h4>Technological Skills</h4>

                    <Button size='sm' variant='secondary'>
                        <SiBootstrap /> Bootstrap
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiCss3 /> CSS3
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiFirebase /> Firebase
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiGithub /> GitHub
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiHtml5 /> HTML5
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiJavascript /> Javascript
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiLinux /> Linux
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiNodeDotJs /> Node.js
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiReact /> React
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiSass /> SASS
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiSellfy /> SemanticUI
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiVisualstudiocode /> VSCode
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <SiWordpress /> Wordpress
                    </Button>

                    <Button size='sm' variant='secondary'>
                        <FaCheck /> Wrike
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}