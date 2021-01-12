import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

import { C43Website } from './projects/C43Website'
import { ComingSoon } from './projects/ComingSoon'
import { SeaTrack } from './projects/SeaTrack'

import './Github.scss'

export const Github = () => {
    return (
        <Container id='gitHubContainer'>
            <CardColumns id='gitHubColumns'>
                <C43Website />
                <SeaTrack />
                <ComingSoon />
            </CardColumns>
        </Container>
    )
}