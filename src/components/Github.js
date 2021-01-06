import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

import seaTrack from '../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'

import './Github.scss'

export const Github = () => {
    return (
        <Container id='githubContainer'>
            <Card style={{ width: '18rem' }} className='gitHubCard'>
                <Card.Img variant="top" src={seaTrack} />

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
        </Container>
    )
}