import { useState } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import seaTrack from '../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'
import { FaInfoCircle } from 'react-icons/fa'

import './Github.scss'

export const Github = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Container id='gitHubContainer'>
            <CardColumns id='gitHubColumns'>
                <Card className='gitHubCard'>
                    <Card.Img variant="top" src={seaTrack} className='gitHubImg' />

                    <Card.Body>
                        <Card.Title>SeaTrack</Card.Title>

                        <Card.Text>
                            A water quality log and tracking app for saltwater and reef aquarists.
                        </Card.Text>

                        <div className='gitHubBadges'>
                            <Badge variant='dark' className='gitHubBadge'>CSS3</Badge>
                            <Badge variant='dark' className='gitHubBadge'>HTML5</Badge>
                            <Badge variant='dark' className='gitHubBadge'>Illustrator</Badge>
                            <Badge variant='dark' className='gitHubBadge'>Javascript</Badge>
                            <Badge variant='dark' className='gitHubBadge'>JSON Server</Badge>
                            <Badge variant='dark' className='gitHubBadge'>React</Badge>
                            <Badge variant='dark' className='gitHubBadge'>Semantic UI</Badge>
                            <Badge variant='dark' className='gitHubBadge'>VSCode</Badge>
                        </div>

                        <Button href='https://github.com/asgertler/sea-track'
                            variant="secondary" target='_blank' className='gitHubBtns'>
                            <SiGithub />&nbsp; See on Github
                        </Button>

                        <Button variant="secondary" className='modalBtns' onClick={handleShow}>
                            <FaInfoCircle />&nbsp; Case Study
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton className='modalHead'>
                                <Modal.Title>Sea Track Case Study</Modal.Title>
                            </Modal.Header>

                            <Modal.Body className='modalBody'>
                                <h4>Client</h4>

                                <h4>Product</h4>

                                <h4>Role</h4>

                                <h4>Challenge</h4>

                                <h4>Process</h4>

                                <h4>Success</h4>
                            </Modal.Body>

                            <Modal.Footer className='modalFoot'>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Card.Body>
                </Card>

                <Card className='gitHubCard'>
                    <Card.Img variant="top" src={seaTrack} className='gitHubImg' />

                    <Card.Body>
                        <Card.Title>NSS Day Cohort 43 Class Website</Card.Title>

                        <Card.Text>
                            Collaboratively designed and built by the UI/UX team of Cohort 43.
                        </Card.Text>

                        <div className='gitHubBadges'>
                            <Badge variant='dark' className='gitHubBadge'>Bootstrap</Badge>
                            <Badge variant='dark' className='gitHubBadge'>CSS3</Badge>
                            <Badge variant='dark' className='gitHubBadge'>Figma</Badge>
                            <Badge variant='dark' className='gitHubBadge'>HTML5</Badge>
                            <Badge variant='dark' className='gitHubBadge'>Javascript</Badge>
                            <Badge variant='dark' className='gitHubBadge'>React</Badge>
                            <Badge variant='dark' className='gitHubBadge'>SASS</Badge>
                            <Badge variant='dark' className='gitHubBadge'>VSCode</Badge>
                        </div>

                        <Button href='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io'
                            variant="secondary" target='_blank' className='gitHubBtns'>
                            <SiGithub />&nbsp; See on Github
                        </Button>

                        <Button variant="secondary" className='modalBtns'>
                            <FaInfoCircle />&nbsp; Case Study
                        </Button>
                    </Card.Body>
                </Card>

                <Card className='gitHubCard'>
                    <Card.Img variant="top" src={seaTrack} className='gitHubImg' />

                    <Card.Body>
                        <Card.Title>SeaTrack</Card.Title>

                        <Card.Text>
                            A water quality log and tracking app for saltwater and reef aquarists.
                        </Card.Text>

                        <Button href='https://github.com/asgertler/sea-track'
                            variant="secondary" target='_blank' className='gitHubBtns'>
                            <SiGithub />&nbsp; See on Github
                        </Button>

                        <Button variant="secondary" className='modalBtns'>
                            <FaInfoCircle />&nbsp; Case Study
                        </Button>
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    )
}