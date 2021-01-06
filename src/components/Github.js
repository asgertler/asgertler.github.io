import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

import { SeaTrack } from './projects/SeaTrack'

import './Github.scss'

export const Github = () => {
    return (
        <Container id='gitHubContainer'>
            <CardColumns id='gitHubColumns'>
                <SeaTrack />
                <SeaTrack />
                <SeaTrack />
            </CardColumns>
        </Container>
    )
}