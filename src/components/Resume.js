import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { IoMdDownload } from 'react-icons/io'

import './Resume.scss'

export const Resume = () => {
    return (
        <Container id='resumeContainer'>
            <Row id='resumeRow'>
                <Col id='resumeCol'>
                    <div id='resumeHeader'>
                        <h4>My Résumé</h4>
                        <Button id='resumeBtn' size='sm' variant='secondary'>
                            <IoMdDownload />&nbsp; Download PDF
                        </Button>
                    </div>

                    <hr />
                </Col>
            </Row>
        </Container>
    )
}