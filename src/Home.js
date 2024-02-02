import Header from "./Header";
import './App.css';
import Slider from "./Slider";
import Course from "./Course";
import Counter from "./Counter";
import Choose from "./Choose";
import Placement from "./Placement";
import Demand from "./Demand";
import Footer from "./Footer";
import Course_img1 from './image/Android.webp';
import Course_img2 from './image/Graphic_Design.webp';
import Course_img3 from './image/institute.webp';
import Course_img4 from './image/traininginstitute.webp';
import Course_img5 from './image/Lumion.webp';
import Course_img6 from './image/unity.webp';
import chooseimg1 from './image/1.PNG';
import chooseimg2 from './image/2.PNG';
import chooseimg3 from './image/3.PNG';
import chooseimg4 from './image/4.PNG';
import chooseimg5 from './image/5.PNG';
import chooseimg6 from './image/6.PNG';
import { BsEnvelope, BsArrowRight, BsWhatsapp } from "react-icons/bs";
import Aboutus from "./Aboutus";
import Student from "./Student";
const Courses = [
    { img: Course_img1, info: "Development Courses" },
    { img: Course_img2, info: "Design Courses" },
    { img: Course_img3, info: "Programming IT" },
    { img: Course_img4, info: "Trendy Courses" },
    { img: Course_img5, info: "Civil-Mech.Engineering" },
    { img: Course_img6, info: "Business Development" }
]
const Choose_sec = [
    { img: chooseimg1, info: "Industry Experts As Trainer", information: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
    { img: chooseimg2, info: "Latest Curriculum", information: "We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time. " },
    { img: chooseimg3, info: "Latest Technology", information: " We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
    { img: chooseimg4, info: "Interview Assistance", information: "At the end of each training,our training instructor will go through the possible technical questions you may be asked. " },
    { img: chooseimg5, info: "Free Upgradation", information: " We will be provided free upgradation for any newer version of the course you have." },
    { img: chooseimg6, info: "Lifetime Support", information: "We will provide you lifetime support on all the courses you learned from us. " }
]
function Home() {

    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <div className="Container">
                <div className='gallery'>
                    <div className="infos">
                        <div className="fonts">
                            <div className="one">
                                <div className="line"></div>
                                <font>creative courses</font>
                            </div>
                            <p>offerred courses</p>
                        </div>
                    </div>
                    <div className='allcourse'>
                        {
                            Courses.map((ele,ind)=>{
                                return(
                                    <Course img={ele.img} info={ele.info} />
                                )
                            })
                        }
                    </div>
                    <div className="viewbtn">
                        <span>View All Courses<BsArrowRight></BsArrowRight></span>
                    </div>
                </div>
            </div>
            <Aboutus></Aboutus>
            <Counter></Counter>
            <Student></Student>
            <div className='choosebgcolor'>
                <div className='Container'>
                    <div className='chose'>
                        <div className='creative'>
                            <div className="cre-info">
                                <div className="line"></div>
                                <font>READ OUR DIFFERENCE</font>
                            </div>
                            <p>WHY CHOOSE CREATIVE</p>
                            <div className='allitem'>
                                {
                                   Choose_sec.map((ele, ind) => {
                                        return (
                                            <Choose img={ele.img} info={ele.info} information={ele.information}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Placement></Placement>
            <Demand></Demand>
            <Footer></Footer>
        </>
    )
}
export default Home;