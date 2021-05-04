import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import cardData from './data';
import CatagoryCompnent from './CatagoryComponent/CatagoryCompnent'
import CardColumns from 'react-bootstrap/CardColumns'
import {  MDBRow } from 'mdb-react-ui-kit';


export default class CatagoryList extends Component {
    state = {catagoryList: cardData}

    insertCatagory = (data) => {
        // .. actions for adding a new catagory
    }
    render() {
        const cardDatas = cardData.map(cardItem => 
            <CatagoryCompnent 
                    key={cardItem.id} 
                    name={cardItem.name} 
                    imgSrc={cardItem.imgSrc} 
                    description={cardItem.description} />)
            return(
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {cardDatas}
            </MDBRow>
        )
    }
}
