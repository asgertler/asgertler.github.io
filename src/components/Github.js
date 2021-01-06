import { useState } from 'react'

import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'

import { SeaTrack } from './projects/SeaTrack'
import seaTrackImg from '../img/seaTrackCard.png'

import { SiGithub } from 'react-icons/si'
import { FaInfoCircle } from 'react-icons/fa'

import './Github.scss'

export const Github = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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