import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import ResumePDF from '../docs/aaron-gertler_resume.pdf'

import { IoMdDownload } from 'react-icons/io'

import './Resume.scss'

export const Resume = () => {
    return (
        <Container id='resumeContainer'>
            <Row id='resumeRow'>
                <Col id='resumeCol'>
                    <div id='resumeHeader'>
                        <h4>My Résumé</h4>
                        <Button id='resumeBtn' size='sm' variant='secondary'
                            href={ResumePDF} target='_blank'>
                            <IoMdDownload />&nbsp; Full PDF
                        </Button>
                    </div>

                    <hr />

                    <Row>
                        <Col>
                            <h5>About</h5>

                            <p>
                                An experienced designer and collaborator that has worked across a
                                wide spectrum of multimedia and marketing and is currently honing
                                their skillset as a UI/UX designer and front-end developer using
                                technologies such as HTML5, CSS3, JavaScript, and React. Looking to
                                take the next step along the path to front-end development by taking a
                                role as a junior developer.
                            </p>
                        </Col>
                    </Row>

                    <hr />

                    <h5>Technical Experience</h5>

                    <Row>
                        <Col xs={12} lg={6}>
                            <div className='experience'>
                                <p>
                                    <strong>
                                        UI/UX DESIGNER & FRONT-END DEVELOPER (APPRENTICESHIP)
                                    </strong>
                                </p>

                                <p>
                                    <strong>
                                        Nashville Software School
                                    </strong>
                                </p>

                                <p>2020–Current</p>

                                <ul className='resumeDetails'>
                                    <li>
                                        Intensive full-time six-month front-end web development and UI/UX
                                        design bootcamp anchoring learning with both individual and teambased projects. Tech Stack: HTML5, CSS3, SASS, JavaScript, React, JSON, Node.js, Git, and GitHub.
                                    </li>

                                    <li>
                                        Version control, simulated work-based learning environment, emphasis
                                        on team-based development, applied knowledge of interpreting existing code, focus on UI/UX design concepts.
                                    </li>

                                    <li>
                                        <strong>NSS Project #1</strong> - SeaTrack (See on <a href='https://github.com/asgertler/sea-track' target='_blank'>GitHub</a>): An app to help aquarists track water quality and fish health in their aquarium(s). Built using React, HTML5, CSS3, JSON Server, and Semantic UI.
                                    </li>

                                    <li>
                                        <strong>NSS Project #2</strong> - C43 Class Website (See on <a href='https://github.com/nss-day-cohort-43/nss-day-cohort-43.github.io' target='_blank'>GitHub</a>): Cohort website designed and constructed by the UI/UX team of C43 with a focus user wireframing, prototyping, and user testing. Built using React, HTML5, SASS, Firebase, and Bootstrap.
                                    </li>
                                </ul>
                            </div>
                        </Col>

                        <Col xs={12} lg={6}>
                            <div className='experience'>
                                <p>
                                    <strong>
                                        WEB COORDINATOR
                                    </strong>
                                </p>

                                <p>
                                    <strong>
                                        AIGA Nashville
                                    </strong>
                                </p>

                                <p>2017–Current</p>

                                <ul className='resumeDetails'>
                                    <li>
                                        Maintain the official website of the Nashville chapter of AIGA,
                                        nashville.aiga.org, which is built on Wordpress using the iKit 3 framework.
                                    </li>

                                    <li>
                                        Currently in the process of staging then launching a redesign of our
                                        website utilizing the Divi framework as a foundation.
                                    </li>
                                </ul>
                            </div>

                            <div className='experience'>
                                <p>
                                    <strong>
                                        MULTIMEDIA DESIGNER
                                    </strong>
                                </p>

                                <p>
                                    <strong>
                                        KHS America, Inc.
                                    </strong>
                                </p>

                                <p>2014–2020</p>

                                <ul className='resumeDetails'>
                                    <li>
                                        Created and managed a suite of assets, both print and digital, across a family of 20 unique musical instrument brands.
                                    </li>

                                    <li>
                                        Collaborated with multiple cross-functional marketing teams to support brand initiatives and strategies to increase awareness and bolster sales while managing workload via task management software.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                    <hr />

                    <h5>Education</h5>

                    <Row>
                        <Col xs={12} md={6} lg={4} className='mb-3 mb-md-0'>
                            <p>
                                <strong>
                                    UI/UX Design & Front-End Development
                                    </strong>
                            </p>

                            <p>Nashville Software School</p>
                        </Col>

                        <Col xs={12} md={6} lg={4} className='mb-3 mb-md-0'>
                            <p>
                                <strong>
                                    Master of Arts, Advertising & Public Relations
                                    </strong>
                            </p>

                            <p>The University of Alabama, 2012</p>
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <p>
                                <strong>
                                    Bachelor of Arts, Visual Communication
                                    </strong>
                            </p>

                            <p>The University of Alabama, 2011</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container >
    )
}