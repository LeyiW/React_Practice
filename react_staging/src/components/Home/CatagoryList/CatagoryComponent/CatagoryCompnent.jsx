import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './CatagoryCard.css'
// import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol,MDBCardFooter } from 'mdb-react-ui-kit';
// import pumpkin from './img/pumpkin.jpg'

export default class CatagoryCompnent extends Component {
    render() {
        return (
            <div className='customize_card'>
                <Card border='info' bg="light" >
                    <Card.Header className='c_Header'>{this.props.name}</Card.Header>
                    <div style={{textAlign:'center'}}>
                    <Card.Img variant="bottom" src={this.props.imgSrc} 
                    style={{width:'auto',padding: '10px', height:'250px'}}/>
                    </div>
                    <Card.Body>
                        <Card.Title style={{textAlign:'center'}} >{this.props.name}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <div style={{textAlign:'center'}}>
                            <Button variant="primary">Shop</Button>
                        </div>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                    {/* <MDBCol>
                        <MDBCard className='h-100'>
                        <MDBCardImage
                            src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                            This is a longer card with supporting text below as a natural lead-in to additional content.
                            This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className='text-muted'>Last updated 3 mins ago</small>
                        </MDBCardFooter>
                        </MDBCard>
                    </MDBCol> */}
            </div>
        )
    }
}
