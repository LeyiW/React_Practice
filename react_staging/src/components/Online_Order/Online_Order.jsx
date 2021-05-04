import React, { Component } from 'react'
import { MDBRipple } from 'mdb-react-ui-kit';
import { MDBTypography } from 'mdb-react-ui-kit';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default class Online_Order extends Component {
    render() {
        return (
            <div>
                <Row>
                <Jumbotron fluid style={{height: '300px'}}>
                            <Container>
                                <MDBBreadcrumb>
                                    <MDBBreadcrumbItem>
                                    <a href='#'>Home</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem active>Order_Online</MDBBreadcrumbItem>
                                </MDBBreadcrumb>

                                <h1>Order Online</h1>
                                <p>
                                    You can order online for delivery or pickup delicious your self here. Enjoy.
                                </p> 
                                <p>
                                    <Button variant="primary bottom">Learn more</Button>
                                </p>
                            </Container>
                        </Jumbotron>
                </Row>
                <Row>
                    <Col sm={6} >
                            <MDBRipple rippleTag='div' className='bg-image' style={{padding: '50px'}}>
                                <img src={"./img/old.jpg"} className='h-100 w-100' />
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.6)' }}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <figure className='text-center mb-0'>
                                            <MDBTypography blockquote>
                                                <h3>Delivery</h3>
                                            </MDBTypography>
                                            <figcaption className='blockquote-footer mb-0'>
                                            We have free delivery for olds. Enjoy 
                                            {/* <cite title='Source Title'>Source Title</cite> */}
                                            </figcaption>
                                        </figure>
                                    </div>

                                </div>
                            </MDBRipple>
                    </Col>
                    <Col sm={6} >
                            <MDBRipple rippleTag='div' rippleColor='light' className='bg-image' style={{padding: '50px'}}>
                                <img src={"./img/pickUp.jpeg"} className='w-100' />
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.6)' }}>
                                    <div className='d-flex justify-content-center align-items-center h-100'>
                                        <figure className='text-center mb-0'>
                                            <MDBTypography blockquote>
                                                <h3>Pick-up</h3>
                                            </MDBTypography>
                                            <figcaption className='blockquote-footer mb-0'>
                                            Find goods in local glocory and pick up yourself
                                            {/* <cite title='Source Title'>Source Title</cite> */}
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </MDBRipple> 
                    </Col>
                </Row>
                    
               
                
            </div>
        )
    }
}
