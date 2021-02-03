import Badge from 'react-bootstrap/Badge'
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
import { FaCheck } from 'react-icons/fa'

import './Design.scss'

export const Design = () => {
    return (
        <Col xs={12} md={6} className='skillsCol'>
            <div className='designList'>
                <h4>UI/UX Skills</h4>
                <hr />

                <Badge variant='dark' className='designBadge'>
                    <SiAdobexd style={{ color: '#F75EEE', backgroundColor: '#450135' }} />&nbsp; Adobe XD
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <FaPaintBrush style={{ color: 'mediumspringgreen' }} />&nbsp; Branding
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <FaPen style={{ color: 'gold' }} />&nbsp; Copywriting
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <SiFigma style={{ color: '#F24E1E' }} />&nbsp; Figma
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <SiAdobeillustrator style={{ color: '#F79500', backgroundColor: '#310000' }} />&nbsp; Illustrator
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <SiAdobeindesign style={{ color: '#F73163', backgroundColor: '#47021E' }} />&nbsp; InDesign
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <FaSitemap style={{ color: 'cyan' }} />&nbsp; Journey Mapping
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <SiAdobelightroomclassic style={{ color: '#2FA3F7', backgroundColor: '#001D34' }} />&nbsp; Lightroom
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <SiAdobephotoshop style={{ color: '#2FA3F7', backgroundColor: '#001D34' }} />&nbsp; Photoshop
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <FaWrench style={{ color: 'lightsteelblue' }} />&nbsp; Prototyping
                </Badge>

                <Badge variant='dark' className='designBadge'>
                    <FaUserAlt style={{ color: 'dodgerblue' }} />&nbsp; User Testing
                </Badge>

                <Badge variant='dark' className='techBadge'>
                    <FaCheck style={{ color: '#08cf65' }} />&nbsp; Wrike
                </Badge>
            </div>
        </Col>
    )
}