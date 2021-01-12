import Badge from 'react-bootstrap/Badge'
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

                <Badge variant='dark' className='techBadge'>
                    <SiBootstrap style={{ color: '#61dafb' }} />&nbsp; Bootstrap
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiCss3 style={{ color: 'dodgerblue' }} />&nbsp; CSS3
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiFirebase style={{ color: '#FFCA28' }} />&nbsp; Firebase
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiGithub style={{ color: '#fafafa' }} />&nbsp; GitHub
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiHtml5 style={{ color: '#f06529' }} />&nbsp; HTML5
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiJavascript style={{ color: '#fcdc00' }} />&nbsp; Javascript
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiLinuxfoundation style={{ color: '#0099cc' }} />&nbsp; Linux
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiNodeDotJs style={{ color: '#83cd29' }} />&nbsp; Node.js
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiReact style={{ color: '#61dafb' }} />&nbsp; React
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiSass style={{ color: '#c69' }} />&nbsp; SASS
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiSellfy style={{ color: '#00B5AD' }} />&nbsp; Semantic UI
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiVisualstudiocode style={{ color: '#0078d7 ' }} />&nbsp; VSCode
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <SiWordpress style={{ color: '#00A0D2' }} />&nbsp; Wordpress
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <FaCheck style={{ color: '#08cf65' }} />&nbsp; Wrike
                </Badge>
            </div>
        </Col>
    )
}