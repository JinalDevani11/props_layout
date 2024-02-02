import p1 from './image/knovetor.png';
import p2 from './image/br.jpg';
import p3 from './image/bytefum.png';
import p4 from './image/icanstudioz.png';
import p5 from './image/rapidlead-softech.png';
import p6 from './image/signature.png';
import p7 from './image/INFINITE-DEVELOPERS.png';
import p8 from './image/VNB-INFOTECH.png';
import p9 from './image/syphnosys.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';

const Placement_sec = [p1, p2, p3, p4, p5, p6, p7, p8, p9]


function Placement() {
    return (
        <>

            <div className="Container">
                <div className='mb-5'>
                    <div className='creative'>
                        <div className="cre-info">
                            <div className="line"></div>
                            <font>STUDENT PLACEMENT</font>
                        </div>
                        <p>OUR RECRUITMENT PARTNERS</p>
                        <OwlCarousel className='owl-theme' loop margin={10} dots={false} items={6} autoplay={true}autoplayTimeout={3000} autoplaySpeed={1500}>
                            {Placement_sec.map((ele, ind) => {
                                return (
                                    <div class='p_item' key={ind}>
                                        <img src={ele}></img>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Placement;