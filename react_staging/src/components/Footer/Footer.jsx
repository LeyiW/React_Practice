import React, { Component } from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBBtn, MDBIcon ,MDBInput } from 'mdb-react-ui-kit';

export default class Footer extends Component {
    render() {
        return (
            <MDBFooter backgroundcolor='light' className='text-center text-lg-left'>
                <MDBContainer className='p-4'>
                <h5>Our social media: </h5>
                    {/* Icons */}
                    <MDBRow>
                        <MDBCol>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }}>
                            <MDBIcon fab icon='facebook-f' size='lg' />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
                            <MDBIcon fab icon='twitter' size='lg' />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
                            <MDBIcon fab icon='google' size='lg' />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
                            <MDBIcon fab icon='instagram' size='lg' />
                        </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <MDBContainer className='p-4'>
                    {/* Contenr */}
                    <MDBRow>
                    <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>About us</h5>

                        <p>
                        我们致力于提供最绿色，新鲜，健康的农产品。
                        <br/>
                        顾客们可以通过上网预定或者到店自取的方式享受到令人放心的食物。
                        </p>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase'>Shopping</h5>

                        <ul className='list-unstyled mb-0'>
                        <li>
                            <a href='#!' className='text-dark'>
                            Browser Product
                            </a>
                        </li>
                        <li>
                            <a href='/find_store!' className='text-dark'>
                            Find local Glocery
                            </a>
                        </li>
                        <li>
                            <a href='#!' className='text-dark'>
                            Weekly sale
                            </a>
                        </li>
                        <li>
                            <a href='#!' className='text-dark'>
                            Gift card
                            </a>
                        </li>
                        </ul>
                    </MDBCol>

                    <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                        <h5 className='text-uppercase mb-0'>More</h5>

                        <ul className='list-unstyled'>
                        <li>
                            <a href='#!' className='text-dark'>
                            About us
                            </a>
                        </li>
                        <li>
                            <a href='#!' className='text-dark'>
                            Career
                            </a>
                        </li>
                        <li>
                            <a href='#!' className='text-dark'>
                            Join our charity community
                            </a>
                        </li>
                        <li>
                            <a href='#!' className='text-dark'>
                            Co-operate with us
                            </a>
                        </li>
                        </ul>
                    </MDBCol>
                    </MDBRow>
                </MDBContainer>

                {/* Email */}
                <MDBContainer className='p-4 pb-0'>
                    <form action=''>
                    <MDBRow>
                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                        <p className='pt-2'>
                            <strong>Sign up for our newsletter</strong>
                        </p>
                        </MDBCol>

                        <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                        <MDBInput type='text' id='form5Example2' label='Email address' />
                        </MDBCol>

                        <MDBCol size='auto' className='mb-4 mb-md-0'>
                        <MDBBtn>Subscribe</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    </form>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundcolor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()}{' '}
                    <a className='text-dark' href='https://AsiaUS.com/'>
                    AisaUS.com
                    </a>
                </div>
            </MDBFooter>
        )
    }
}
