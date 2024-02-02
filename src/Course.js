

import './App.css';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function Course(props) {
    return (
        <>
            <div className="singleitem">
                <div className="img">
                    <img src={props.img}></img>
                </div>
                <p>{props.info}</p>
                <div className="btnarea">
                    <ul className="btns">
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStarHalfAlt /></li>
                    </ul>
                    <div className='btn1'>
                        <a href='#'> know more</a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Course;