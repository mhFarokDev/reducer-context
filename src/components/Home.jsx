import React, { useContext } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import MessageContext from '../context/MessageContext'

const Home = () => {
    // call message reducer
    const {msg, dispatch} = useContext(MessageContext)
  return (
    <Container className='mt-5'>
        <Row className='justify-content-center '>
            <Col md={6}>
            <Card className='shadow'>
                <code className='my-3'>Type here somthing...</code>
                <input className='form-control mb-3' value={msg} onChange={e=> dispatch({type: '', payload : e.target.value})}/>
            </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Home