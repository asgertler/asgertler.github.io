import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { SiAdobexd } from 'react-icons/si'
import { FaPaintBrush } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { SiFigma } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobeindesign } from 'react-icons/si'
import { FaSitemap } from 'react-icons/fa'
import { SiAdobelightroomclassic } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { FaWrench } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'

import './Design.scss'

export const Design = () => {
    return (
        <Col xs={12} md={6} className='skillsCol'>
            <div className='designList'>
                <h4>UI/UX Skills</h4>
                <hr />

                <Button size='sm' variant='info'>
                    <SiAdobexd style={{ color: '#F75EEE', backgroundColor: '#450135' }} />&nbsp; Adobe XD
                </Button>

                <Button size='sm' variant='info'>
                    <FaPaintBrush style={{ color: 'mediumspringgreen' }} />&nbsp; Branding
                </Button>

                <Button size='sm' variant='info'>
                    <FaPen style={{ color: 'gold' }} />&nbsp; Copywriting
                </Button>

                <Button size='sm' variant='info'>
                    <SiFigma style={{ color: '#F24E1E' }} />&nbsp; Figma
                </Button>

                <Button size='sm' variant='info'>
                    <SiAdobeillustrator style={{ color: '#F79500', backgroundColor: '#310000' }} />&nbsp; Illustrator
                </Button>

                <Button size='sm' variant='info'>
                    <SiAdobeindesign style={{ color: '#F73163', backgroundColor: '#47021E' }} />&nbsp; InDesign
                </Button>

                <Button size='sm' variant='info'>
                    <FaSitemap style={{ color: 'cyan' }} />&nbsp; Journey Mapping
                </Button>

                <Button size='sm' variant='info'>
                    <SiAdobelightroomclassic style={{ color: '#2FA3F7', backgroundColor: '#001D34' }} />&nbsp; Lightroom
                </Button>

                <Button size='sm' variant='info'>
                    <SiAdobephotoshop style={{ color: '#2FA3F7', backgroundColor: '#001D34' }} />&nbsp; Photoshop
                </Button>

                <Button size='sm' variant='info'>
                    <FaWrench style={{ color: 'lightsteelblue' }} />&nbsp; Prototyping
                </Button>

                <Button size='sm' variant='info'>
                    <FaUserAlt style={{ color: 'dodgerblue' }} />&nbsp; User Testing
                </Button>
            </div>
        </Col>
    )
}