import about from "./image/about-us.webp";
import {  BsArrowRight} from "react-icons/bs";
import {  FaPlay} from "react-icons/fa";
function Aboutus() {
    return (
        <>
            <div className="about">
                <div className='aboutinfo'>
                    <div className="about_shape">
                        <div className="two">
                            <div className="line"></div>
                            <font>about us</font>
                        </div>
                        <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
                        <p>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively..</p>
                        <div className="aboutbtn">
                            <span>Enroll Now..!  <BsArrowRight></BsArrowRight></span>
                        </div>
                    </div>
                </div>
                <div className='aboutimg'>
                    <img src={about}></img>
                    <div className="aboutimg_layer">
                        <span><FaPlay></FaPlay></span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Aboutus;