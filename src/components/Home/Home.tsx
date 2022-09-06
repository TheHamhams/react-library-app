import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Brand from '../../assets/images/index-brand.jpg'
import Skate from '../../assets/images/skate.jpg'

export const Home = () => {
  return (
    <div className='background'>
    <Container fluid className='col-10  background'>
      <Row className='d-flex justify-content-center'>
        <Col>
          <Image rounded src={Brand} fluid />
        </Col>
        <Col align='center' className='background-white'>
          <h1>Welcome to Libraryz!</h1>
          <br/>
          <h4>
            Here at Libraryz we have the most fly collection of books on the net (internet). Our digital library offers audio and digital copies of books
            that can be consumed anywhere. Once you are done, there are no wack drives to your local libray, just check them back in from your profile. 
          </h4>
          <br/>
          <h4>
            Feel free to take a peek at our selection. If you like what you see, just make an account and start reading! It's all ready ready all ready!
          </h4>
          <br />
          <Image style={{maxHeight: '50vh'}} rounded src={Skate} fluid />

        </Col>
      </Row>

    </Container>

    </div>
  )
}
