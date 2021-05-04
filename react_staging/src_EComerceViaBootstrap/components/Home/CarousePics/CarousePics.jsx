import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
// import chickens from './img/chickens.jpg'
// import old from './img/old.jpg'
// import grass from './img/grass.jpg'
import "./CarousePics.css";

export default class CarousePics extends Component {
    render() {
        return (
            <Carousel fade style={{paddingTop:'10px'}}>
                <Carousel.Item>
                    <Image
                    className="img_background_chicken"
                    src={"./img/chickens.jpg"}
                    alt="First slide"
                    fluid
                    />
                    <Carousel.Caption>
                    <h1 align={"left"}>Fresh </h1>
                    <p align={"left"}>we collect orginic and fresh item from local farm </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    className='img_background_grass' 
                    src={"./img/old.jpg"}
                    alt="Second slide"
                    fluid
                    />

                    <Carousel.Caption>
                    <h2>社区</h2>
                    <p>我们致力于帮助行动不便的老人，使其生活更加健康。</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                    className="img_background_old"
                    src={'./img/grass.jpg'}
                    alt="Third slide"
                    fluid
                    />

                    <Carousel.Caption>
                    <h2>Original</h2>
                    <p>我们致力于提供最绿色，新鲜，健康的农产品。</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
