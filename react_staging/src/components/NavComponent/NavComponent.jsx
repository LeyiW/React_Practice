import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Container, Navbar } from 'react-bootstrap';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import './Nav.css'

export default class NavComponent extends Component {
    
    handleSelect = (eventKey) => alert(`selected ${eventKey}`);

    render() {
        return (  
            <Navbar className="NavB" bg="light" variant="light" >
                
                
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
                </Form> */}
                <Container className="mr-auto">
                <Row>
                    <Col>
                        <Navbar.Brand href="/">AsiaUS</Navbar.Brand>
                    </Col>
                    <Col md="auto">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Brower Product</Nav.Link>
                            <Nav.Link href="/order_online">Order Online</Nav.Link>
                            <Nav.Link href="/find_store">Find a store</Nav.Link>
                        </Nav>
                    </Col>
                </Row>
                </Container>
                <Navbar.Collapse className="justify-content-end">
                    <Col>
                        <Nav className="justify-content-end" >
                            <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
                        </Nav>
                    </Col>
                    <Navbar.Text className="mr-sm">
                        Signed in as: <a href="#login">Leyi Wang</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            )
    }
}


