import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import MessageContext from '../context/MessageContext'

const Page1 = () => {
    // call message reducer
    const {msg} = useContext(MessageContext)
  return (
    <Container className='mt-3'>
        <Row className='justify-content-center'>
            <Col md={6}>
                <Card className='shadow'>
                    <h3 className='my-3'>{msg}</h3>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Page1