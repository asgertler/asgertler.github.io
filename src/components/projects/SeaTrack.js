import { useState } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'

import seaTrackImg from '../../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'
import { FaInfoCircle } from 'react-icons/fa'

export const SeaTrack = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Card className='gitHubCard'>
            <Card.Img variant="top" src={seaTrackImg} className='gitHubImg' />

            <Card.Body>
                <Card.Title>SeaTrack</Card.Title>

                <Card.Text>
                    A water quality log and tracking app for saltwater and reef aquarists.
                        </Card.Text>

                <div className='gitHubBadges'>
                    <Badge variant='dark' className='gitHubBadge'>CSS3</Badge>
                    <Badge variant='dark' className='gitHubBadge'>Heroku</Badge>
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
                    <SiGithub />&nbsp; GitHub Repo
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
                        <p>
                            Hey, take a look at the earthlings. Goodbye! Remind me to thank John for a
                            lovely weekend. Forget the fat lady! You're obsessed with the fat lady! Drive
                            us out of here! Do you have any idea how long it takes those cups to decompose.
                            Must go faster... go, go, go, go, go!
                        </p>

                        <h4>Product</h4>
                        <p>
                            Hey, take a look at the earthlings. Goodbye! Remind me to thank John for a
                            lovely weekend. Forget the fat lady! You're obsessed with the fat lady! Drive
                            us out of here! Do you have any idea how long it takes those cups to decompose.
                            Must go faster... go, go, go, go, go!
                        </p>

                        <h4>Role</h4>
                        <p>
                            Hey, take a look at the earthlings. Goodbye! Remind me to thank John for a
                            lovely weekend. Forget the fat lady! You're obsessed with the fat lady! Drive
                            us out of here! Do you have any idea how long it takes those cups to decompose.
                            Must go faster... go, go, go, go, go!
                        </p>

                        <h4>Challenge</h4>
                        <ul>
                            <li>Goodbye! Remind me to thank John for a lovely weekend.</li>
                            <li>Goodbye! Remind me to thank John for a lovely weekend.</li>
                            <li>Goodbye! Remind me to thank John for a lovely weekend.</li>
                        </ul>

                        <h4>Process</h4>
                        <ul>
                            <li>You're obsessed with the fat lady!</li>
                            <li>You're obsessed with the fat lady!</li>
                            <li>You're obsessed with the fat lady!</li>
                            <li>You're obsessed with the fat lady!</li>
                            <li>You're obsessed with the fat lady!</li>
                        </ul>

                        <h4>Success</h4>
                        <p>
                            Hey, take a look at the earthlings. Goodbye! Remind me to thank John for a
                            lovely weekend. Forget the fat lady! You're obsessed with the fat lady! Drive
                            us out of here! Do you have any idea how long it takes those cups to decompose.
                            Must go faster... go, go, go, go, go!
                        </p>
                    </Modal.Body>

                    <Modal.Footer className='modalFoot'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                                </Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    )
}