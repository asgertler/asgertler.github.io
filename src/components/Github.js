import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

import { SeaTrack } from './projects/SeaTrack'
import { C43Website } from './projects/C43Website'

import './Github.scss'

export const Github = () => {
    return (
        <Container id='gitHubContainer'>
            <CardColumns id='gitHubColumns'>
                <SeaTrack />
                <C43Website />
                <SeaTrack />
            </CardColumns>
        </Container>
    )
}