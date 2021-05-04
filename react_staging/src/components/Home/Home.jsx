import React, { Component } from 'react'
import CarousePics from "./CarousePics/CarousePics";
import CatagoryList from './CatagoryList/CatagoryList';

export default class Home extends Component {
    render() {
        return (
            <div>
               <CarousePics/> 
               <CatagoryList/>
            </div>
        )
    }
}
