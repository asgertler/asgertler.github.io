import { useState } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'

import C43Img from '../../img/C43Card.png'

import { SiGithub } from 'react-icons/si'
import { FaInfoCircle } from 'react-icons/fa'

import './projects.sass'

export const C43Website = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <Card className='gitHubCard'>
            <Card.Img variant="top" src={C43Img} className='gitHubImg' />

            <Card.Body>
                <Card.Title>NSS C43 Cohort Website</Card.Title>

                <Card.Text>
                    Team project in Nashville Software School to build our cohort's website.
                        </Card.Text>

                <div className='gitHubBadges'>
                    <Badge variant='dark' className='gitHubBadge'>Bootstrap</Badge>
                    <Badge variant='dark' className='gitHubBadge'>CSS3</Badge>
                    <Badge variant='dark' className='gitHubBadge'>Figma</Badge>
                    <Badge variant='dark' className='gitHubBadge'>HTML5</Badge>
                    <Badge variant='dark' className='gitHubBadge'>Illustrator</Badge>
                    <Badge variant='dark' className='gitHubBadge'>Javascript</Badge>
                    <Badge variant='dark' className='gitHubBadge'>JSON Server</Badge>
                    <Badge variant='dark' className='gitHubBadge'>React</Badge>
                    <Badge variant='dark' className='gitHubBadge'>VSCode</Badge>
                </div>

                <Button href='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io'
                    variant="secondary" target='_blank' className='gitHubBtns'>
                    <SiGithub />&nbsp; GitHub Repo
                        </Button>

                <Button variant="secondary" className='modalBtns' onClick={handleShow}>
                    <FaInfoCircle />&nbsp; Case Study
                        </Button>

                <Modal show={show} onHide={handleClose} size='lg'>
                    <Modal.Header closeButton className='modalHead'>
                        <Modal.Title>NSS C43 Cohort Website Case Study</Modal.Title>
                    </Modal.Header>

                    <Modal.Body className='modalBody'>
                        <h4>Client</h4>
                        <p>
                            Nashville Software School Cohort 43
                        </p>

                        <h4>Product</h4>
                        <p>
                            Cohort 43 Website
                        </p>

                        <h4>Role</h4>
                        <p>
                            UI/UX Designer & Front-End Developer
                        </p>

                        <h4>Challenge</h4>
                        <p>
                            How might we promote Demo Day and showcase Cohort 43's dual skill sets to
                            potential employers with the ultimate goal of employment?
                        </p>

                        <h4>Process</h4>
                        <p>
                            This project started off with the class splitting into two teams to wireframe and mock up a class site, with the end goal of showcasing our designs, defending them, and compromising on which project we should move ahead with.
                        </p>

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