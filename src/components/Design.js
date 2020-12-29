import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

import { SiAdobexd } from 'react-icons/si'
import { FaPaintBrush } from 'react-icons/fa'
import { FaPen } from 'react-icons/fa'
import { SiFigma } from 'react-icons/si'
import { SiAdobeillustrator } from 'react-icons/si'
import { SiAdobeindesign } from 'react-icons/si'
import { SiAdobelightroomclassic } from 'react-icons/si'
import { SiAdobephotoshop } from 'react-icons/si'
import { FaUserAlt } from 'react-icons/fa'

import './Design.scss'

export const Design = () => {
    return (
        <Col className='designList' xs={12} md={6}>
            <h4>Design Skills</h4>

            <Button size='sm'>
                <SiAdobexd style={{ color: '#F75EEE', backgroundColor: '#450135' }} />&nbsp; Adobe XD
                    </Button>

            <Button size='sm'>
                <FaPaintBrush style={{ color: 'mediumspringgreen' }} />&nbsp; Branding
                    </Button>

            <Button size='sm'>
                <FaPen style={{ color: 'gold' }} />&nbsp; Copywriting
                    </Button>

            <Button size='sm'>
                <SiFigma style={{ color: '#F24E1E' }} />&nbsp; Figma
                    </Button>

            <Button size='sm'>
                <SiAdobeillustrator style={{ color: '#F79500', backgroundColor: '#310000' }} />&nbsp; Illustrator
                    </Button>

            <Button size='sm'>
                <SiAdobeindesign style={{ color: '#F73163', backgroundColor: '#47021E' }} />&nbsp; InDesign
                    </Button>

            <Button size='sm'>
                <SiAdobelightroomclassic style={{ color: '#2FA3F7', backgroundColor: '#001D34' }} />&nbsp; Lightroom
                    </Button>

            <Button size='sm'>
                <SiAdobephotoshop style={{ color: '#2FA3F7', backgroundColor: '#001D34' }} />&nbsp; Photoshop
                    </Button>

            <Button size='sm'>
                <FaUserAlt style={{ color: 'dodgerblue' }} />&nbsp; User Testing
                    </Button>
        </Col>
    )
}