import { useState } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'

import seaTrackImg from '../../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'
import { FaInfoCircle } from 'react-icons/fa'

import './projects.sass'

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

                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton className='modalHead'>
                        <Modal.Title>Sea Track Case Study</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='modalBody'>
                        <h4>Client</h4>
                        <p>
                            Aquarists & Aquarium Hobbyists
                        </p>

                        <h4>Product</h4>
                        <p>
                            Water quality logging and tracking app
                        </p>

                        <h4>Role</h4>
                        <p>
                            Lead UI/UX Designer & Front-End Developer
                        </p>

                        <h4>Challenge</h4>
                        <p>
                            How might we make it easier and more efficient to log and track the health and quality of aquariums accurately over time?
                        </p>

                        <h4>Process</h4>
                        <p>
                            This project began with identifying who our target audience is and what their needs and pain points are. I started by writing down three primary types of users:
                        </p>

                        <ul>
                            <li>
                                <strong>Experienced Hobbyist:</strong>
                                <em>User, Customer, Influencer</em><br />
                                <ul>
                                    <li>Probably older, 30s-50s</li>
                                    <li>Fairy tech savvy</li>
                                    <li>Early adopter/majority</li>
                                    <li>Decent income</li>
                                    <li>Keeps good logs</li>
                                    <li>Wants easier tracking</li>
                                    <li>Less clutter</li>
                                    <li>Tired of spreadsheets</li>
                                </ul>
                            </li>
                        </ul>

                        <Image src='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io/blob/main/RMImages/Screen%20Shot%202021-01-14%20at%2011.45.44%20AM.png?raw=true' thumbnail />

                        <Image src='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io/blob/main/RMImages/co431.png?raw=true' thumbnail />

                        <p>
                            After discussion, we realized both teams brought good ideas to the table. We decided to merge the 2 into a hybrid design.
                        </p>

                        <p>
                            One team used Pantone's color of the year for 2021, Illuminating, with a teal that paired well with it. The bright gold color felt fresh and exciting - a new beginning. We wanted to convey that as new hires, we can provide a fresh and aspirational face to any company that might consider hiring us.
                        </p>

                        <p>
                            The other team had a clear, card based layout that displayed the students in a clear and effective manner. We liked the way this layout showed the technologies our cohort learned over our time at NSS.
                        </p>

                        <p>
                            We came together and created a new mockup.
                        </p>

                        <Image src='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io/blob/main/RMImages/combinedMockUp.png?raw=true' thumbnail />

                        <p>
                            We began user testing with 3 development professionals. We took their feedback and improved our site. We did 2 more rounds of user testing and decided on our final design.
                        </p>

                        <Image src='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io/blob/main/RMImages/c43Final.png?raw=true' thumbnail />

                        <h4>Success</h4>
                        <ul>
                            <li>
                                User testing from the beginning helped us make better design decisions. We realized usability trumps innovative design.
                            </li>

                            <li>
                                We learned how to facilitate remote user tests.
                            </li>
                        </ul>
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