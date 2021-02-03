import { useState } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Modal from 'react-bootstrap/Modal'

import seaTrackImg from '../../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'
import { FaInfoCircle } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'

import Hazel from '../../img/hazel-floyd.png'
import Levi from '../../img/levi-walton.png'
import Sulema from '../../img/sulema-barba.png'
import Wireframe from '../../img/sea-track-wireframe.png'
import ERD from '../../img/sea-track-erd.png'
import Site from '../../img/sea-track-site.png'

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
                                <strong>Experienced Hobbyist</strong>
                                <em>(User, Customer, Influencer)</em><br />
                                <ul>
                                    <li>Probably older, 30s-50s</li>
                                    <li>Fairly tech savvy</li>
                                    <li>Early adopter/majority</li>
                                    <li>Decent income</li>
                                    <li>Keeps good logs</li>
                                    <li>Wants easier tracking</li>
                                    <li>Less clutter</li>
                                    <li>Tired of spreadsheets</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Beginner/New to Hobby</strong>
                                <em>(User)</em><br />
                                <ul>
                                    <li>Any age, probably younger</li>
                                    <li>May be less tech inclined</li>
                                    <li>Late majority</li>
                                    <li>Wide income range, probably lower</li>
                                    <li>Unfamiliar with logging</li>
                                    <li>Not ready for complicated</li>
                                    <li>One-stop-shop</li>
                                </ul>
                            </li>

                            <li>
                                <strong>Proffessional</strong>
                                <em>(User, Customer, Influencer)</em><br />
                                <ul>
                                    <li>Probably older, 40s+</li>
                                    <li>Very tech savvy</li>
                                    <li>Early adopter/innovator</li>
                                    <li>Solid budgets, with reason</li>
                                    <li>Keeps extensive logs</li>
                                    <li>Needs to track large systems</li>
                                    <li>Record-keeping vital</li>
                                    <li>Lots of users</li>
                                </ul>
                            </li>
                        </ul>

                        <p>
                            From there, I translated those initial ideas into more fleshed-out personas:
                        </p>

                        <Image src={Hazel} thumbnail />

                        <Image src={Levi} thumbnail />

                        <Image src={Sulema} thumbnail />

                        <p>
                            Using the information gained from creating these personas and receiving feedback from teammates about them, I turned my focus to my ERD that would be the fundamental basis for this entire project in order to effectively achieve CRUD:
                        </p>

                        <Image src={ERD} thumbnail />

                        <p>
                            Next was to create an initial wireframe to give myself direction once I began actually developing the application:
                        </p>

                        <Image src={Wireframe} thumbnail />

                        <p>
                            With all of that information in hand, I set out to create Sea Track using React. The initial build phase in order to meet MVP for my NSS front-end capstone took about two weeks. In the end, I successfully built (and eventually deployed) a working application that allows users to create accounts (unsecure, for learning purposes), create aquariums, add fish to aquariums, create tasks, and log water quality. All of those elements successfully met MVP via CRUD. I also implemented a series of warnings set up to track certain water conditions against safe ranges the user puts onto their fish, such as a healthy pH range. It can also warn the user if they are overdue for a water change.
                        </p>

                        <Image src={Site} thumbnail />

                        <p>
                            After completing my capstone project, I went ahead and deployed the React side of the app on GitHub Pages and hosted the database on Heroku so that the site could be live tested/demoed as well as giving me a chance to learn about fully deploying an application.
                        </p>

                        <h4>Success</h4>
                        <ul>
                            <li>
                                Completed my front-end capstone project for Nashville Software School by creating an app in React and hitting CRUD.
                            </li>

                            <li>
                                Learned how useful a solid planned ERD is for efficiently creating usable database structures.
                            </li>

                            <li>
                                Fully deployed my app for testing and demoing purposes by utilizing GitHub Pages and Heroku.
                            </li>
                        </ul>

                        <Button href='https://github.com/asgertler/sea-track'
                            variant="secondary" target='_blank' className='gitHubBtns'>
                            <SiGithub />&nbsp; GitHub Repo
                        </Button>

                        <Button href='https://asgertler.github.io/sea-track/#/'
                            variant="secondary" target='_blank' className='gitHubBtns'>
                            <FaGlobe />&nbsp; Visit Site
                        </Button>
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