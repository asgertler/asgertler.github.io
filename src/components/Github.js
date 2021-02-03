import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

import { C43Website } from './projects/C43Website'
import { Stockpile } from './projects/Stockpile'
import { SeaTrack } from './projects/SeaTrack'

import './Github.scss'

export const Github = () => {
    return (
        <Container id='projects'>
            <CardColumns id='gitHubColumns'>
                <C43Website />
                <SeaTrack />
                <Stockpile />
            </CardColumns>
        </Container>
    )
}