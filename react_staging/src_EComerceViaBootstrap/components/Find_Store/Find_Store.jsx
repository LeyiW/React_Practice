import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MDBBreadcrumb, MDBBreadcrumbItem } from 'mdb-react-ui-kit';
import My_map from './Map/My_map'

export default class Find_Store extends Component {
    render() {
        return (
                <Row>
                    <Col sm={6} >
                        <Jumbotron fluid style={{height: '600px'}}>
                            <Container>
                                <MDBBreadcrumb>
                                    <MDBBreadcrumbItem>
                                    <a href='#'>Home</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem active>Find_Store</MDBBreadcrumbItem>
                                </MDBBreadcrumb>

                                <h1>Find A Store</h1>
                                <p>
                                    With search there, find your best store to go.
                                </p> 
                                <p>
                                    <Button variant="primary bottom">Learn more</Button>
                                </p>
                            </Container>
                        </Jumbotron>
                    </Col>
                    <Col sm={6}>
                        <My_map/>
                    </Col>
                </Row>
        )
    }
}
