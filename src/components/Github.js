import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

import seaTrack from '../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'

import './Github.scss'

export const Github = () => {
    return (
        <Container id='githubContainer'>
            <CardColumns>
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
                            <Badge variant='dark' className='gitHubBadge'>SemanticUI</Badge>
                            <Badge variant='dark' className='gitHubBadge'>VSCode</Badge>
                        </div>

                        <Button href='https://github.com/asgertler/sea-track'
                            variant="secondary" target='_blank' className='gitHubBtns'>
                            <SiGithub />&nbsp; See on Github
                        </Button>
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
                    </Card.Body>
                </Card>
            </CardColumns>
        </Container>
    )
}