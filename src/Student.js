import cot from "./image/cot.PNG";
import { IoIosArrowDown, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import view from "./image/Capture.PNG";
import userinfo from "./image/user.jpg";
function Student() {
    return (
        <>
            <div className="container">
                <div className="testimonial">
                    <div className="review">
                        <div className="view">
                            <div className="line"></div>
                            <font>HAPPY STUDENTS</font>
                        </div>
                        <h1>ALUMNI SPEAK</h1>
                        <div id="cot">
                            <img src={cot}></img>
                            <div id="arrow">
                                <p className='icon'><IoIosArrowBack /></p>
                                <p className='icon'><IoIosArrowForward /></p>
                            </div>
                        </div>
                        <text className="text">
                            Good institute and excellent presentation skills and if any doubts regarding topics they will clear immediately.
                        </text>
                        <div className="usere_info">
                            <div className="users">
                                <img src={userinfo} class="views"></img>
                            </div>
                            <div className="user_name">
                                <span>Ishita Chopra</span>
                                <font>froented developer</font>
                                <i> @ samp technology</i>
                            </div>
                        </div>
                    </div>
                    <div className="viewimg">
                        <img src={view}></img>
                    </div>
                </div>
            </div></>
    )
}
export default Student;