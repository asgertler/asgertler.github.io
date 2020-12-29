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

import './Design.scss'

export const Design = () => {
    return (
        <Col className='designList' xs={12} md={6}>
            <h4>Design Skills</h4>

            <Button size='sm'>
                <SiBootstrap style={{ color: '#61dafb' }} />&nbsp; Bootstrap
                    </Button>

            <Button size='sm'>
                <SiCss3 style={{ color: 'dodgerblue' }} />&nbsp; CSS3
                    </Button>

            <Button size='sm'>
                <SiFirebase style={{ color: '#FFCA28' }} />&nbsp; Firebase
                    </Button>

            <Button size='sm'>
                <SiGithub style={{ color: '#fafafa' }} />&nbsp; GitHub
                    </Button>

            <Button size='sm'>
                <SiHtml5 style={{ color: '#f06529' }} />&nbsp; HTML5
                    </Button>

            <Button size='sm'>
                <SiJavascript style={{ color: '#fcdc00' }} />&nbsp; Javascript
                    </Button>

            <Button size='sm'>
                <SiLinuxfoundation style={{ color: '#0099cc' }} />&nbsp; Linux
                    </Button>

            <Button size='sm'>
                <SiNodeDotJs style={{ color: '#83cd29' }} />&nbsp; Node.js
                    </Button>

            <Button size='sm'>
                <SiReact style={{ color: '#61dafb' }} />&nbsp; React
                    </Button>

            <Button size='sm'>
                <SiSass style={{ color: '#c69' }} />&nbsp; SASS
                    </Button>

            <Button size='sm'>
                <SiSellfy style={{ color: '#00B5AD' }} />&nbsp; SemanticUI
                    </Button>

            <Button size='sm'>
                <SiVisualstudiocode style={{ color: '#0078d7 ' }} />&nbsp; VSCode
                    </Button>

            <Button size='sm'>
                <SiWordpress style={{ color: '#00A0D2' }} />&nbsp; Wordpress
                    </Button>

            <Button size='sm'>
                <FaCheck style={{ color: '#08cf65' }} />&nbsp; Wrike
                    </Button>
        </Col>
    )
}