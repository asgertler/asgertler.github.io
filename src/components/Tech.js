import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { SiBootstrap } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiFirebase } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiLinuxfoundation } from 'react-icons/si'
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
        <Col xs={12} md={6} className='skillsCol'>
            <div className='techList'>
                <h4>Development Skills</h4>
                <hr />

                <Button size='sm' variant='info'>
                    <SiBootstrap style={{ color: '#61dafb' }} />&nbsp; Bootstrap
                </Button>

                <Button size='sm' variant='info'>
                    <SiCss3 style={{ color: 'dodgerblue' }} />&nbsp; CSS3
                </Button>

                <Button size='sm' variant='info'>
                    <SiFirebase style={{ color: '#FFCA28' }} />&nbsp; Firebase
                </Button>

                <Button size='sm' variant='info'>
                    <SiGithub style={{ color: '#fafafa' }} />&nbsp; GitHub
                </Button>

                <Button size='sm' variant='info'>
                    <SiHtml5 style={{ color: '#f06529' }} />&nbsp; HTML5
                </Button>

                <Button size='sm' variant='info'>
                    <SiJavascript style={{ color: '#fcdc00' }} />&nbsp; Javascript
                </Button>

                <Button size='sm' variant='info'>
                    <SiLinuxfoundation style={{ color: '#0099cc' }} />&nbsp; Linux
                </Button>

                <Button size='sm' variant='info'>
                    <SiNodeDotJs style={{ color: '#83cd29' }} />&nbsp; Node.js
                </Button>

                <Button size='sm' variant='info'>
                    <SiReact style={{ color: '#61dafb' }} />&nbsp; React
                </Button>

                <Button size='sm' variant='info'>
                    <SiSass style={{ color: '#c69' }} />&nbsp; SASS
                </Button>

                <Button size='sm' variant='info'>
                    <SiSellfy style={{ color: '#00B5AD' }} />&nbsp; SemanticUI
                </Button>

                <Button size='sm' variant='info'>
                    <SiVisualstudiocode style={{ color: '#0078d7 ' }} />&nbsp; VSCode
                </Button>

                <Button size='sm' variant='info'>
                    <SiWordpress style={{ color: '#00A0D2' }} />&nbsp; Wordpress
                </Button>

                <Button size='sm' variant='info'>
                    <FaCheck style={{ color: '#08cf65' }} />&nbsp; Wrike
                </Button>
            </div>
        </Col>
    )
}