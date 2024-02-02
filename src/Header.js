import { FaEnvelope, FaCertificate, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { TfiGoogle } from "react-icons/tfi";
import logo from './image/creative.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
var top_header = [
    { icon: <FaEnvelope />, info: "info@gmail.com" },
    { icon: <FaCertificate />, info: " Verify Certificate" },
    { qustion: "Have any question? +91 90333 16003" },
    { Social_icon: <FaFacebookF /> },
    { Social_icon: <FaTwitter /> },
    { Social_icon: <TfiGoogle /> },
    { Social_icon: <FaLinkedin /> },
    { Social_icon: <FaInstagram /> },
    { Social_icon: <FaYoutube /> },
    { Social_icon: <FaWhatsapp /> },
]

var logo_header = [
    { Header: "Home", h_icon: '' },
    { Header: "Courses", h_icon: <IoIosArrowDown /> },
    { Header: "Activities", h_icon: <IoIosArrowDown /> },
    { Header: "Blog", h_icon: '' },
    { Header: "Knowus", h_icon: <IoIosArrowDown /> },
    { Header: "Get in touch", h_icon: '' },
    { Header: "student Zone", h_icon: <IoIosArrowDown /> },
]
function Header() {
    return (
        <>
            <div className="bgcolor">
                <div className="Container">
                    <div className="top_header d-flex justify-content-between">
                        <div className="info">
                            <ul className="ps-0">
                                {
                                    top_header.map((ele, ind) => {
                                        return (
                                            <li key={ind}className="me-3"><span className="me-2">{ele.icon}</span>{ele.info}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="question">
                            <ul>
                                {
                                    top_header.map((ele, ind) => {
                                        return (
                                            <li key={ind}className='text-uppercase'>{ele.qustion}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="socialicon">
                            <ul className="d-flex">
                                {
                                    top_header.map((ele, ind) => {
                                        return (
                                            <a key={ind} href="#" target="_blank" className='text-uppercase ps-2 '>{ele.Social_icon}</a>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="logobgcolor">
                <div className="Container">
                    <div className="menunav ">

                        <div className="logo">
                            <img src={logo}></img>
                        </div>
                        <div className="main_menu">
                            <ul>
                                {
                                    logo_header.map((ele, ind) => {
                                        return (
                                            <li key={ind}><a href="#" className="activepg">{ele.Header}{ele.h_icon}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;