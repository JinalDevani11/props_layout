import banner1 from './image/slider1.jpg';
import banner2 from './image/slider2.webp';
import banner4 from './image/slider4.webp';
import banner5 from './image/slider5.webp';
import banner6 from './image/slider6.webp';
import banner7 from './image/slider7.webp';

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
const slider = [banner1, banner2, banner4, banner5, banner6, banner7]
function Slider() {
    return (
        <>
            <div className="slider">
                <OwlCarousel className='owl-theme' loop margin={0} dots={false} items={1} autoplay={true}autoplayTimeout={3000} autoplaySpeed={2000}>
                    {slider.map((ele, ind) => {
                        return (
                            <div class='item' key={ind}>
                                <img src={ele}></img>
                            </div>
                        )
                    })}
                </OwlCarousel>
            </div>
        </>
    )
}
export default Slider;