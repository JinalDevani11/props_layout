import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa6";
import { FaUniversity, FaHandPointRight } from "react-icons/fa";
import { TfiGoogle } from "react-icons/tfi";
import ftlogo from "./image/creative-logo-white.svg";
var f_icons = [
    { f_icon: <FaFacebookF /> },
    { f_icon: <FaTwitter /> },
    { f_icon: <TfiGoogle /> },
    { f_icon: <FaLinkedin /> },
    { f_icon: <FaInstagram /> },
    { f_icon: <FaYoutube /> },
    { f_icon: <FaWhatsapp /> },
]
var feature_link = [
    { fe_icon: <FaHandPointRight />, fe_info: "about us" },
    { fe_icon: <FaHandPointRight />, fe_info: "bolgs" },
    { fe_icon: <FaHandPointRight />, fe_info: "join us" },
    { fe_icon: <FaHandPointRight />, fe_info: "company login" },
    { fe_icon: <FaHandPointRight />, fe_info: "Certificate verification" }
]
var contact = [
    { c_icon: <FaUniversity />, c_info: "katargam" },
    { c_icon: <FaUniversity />, c_info: "mota varachha" },
    { c_icon: <FaUniversity />, c_info: "adajan" },
    { c_icon: <FaUniversity />, c_info: "navsari" },
]
function Footer() {
    return (
        <>
            <div className="ft-bgcolor">
                <div className="Container">
                    <div className="footer">
                        <div className="footer-info">
                            <div className="footer_logo">
                                <img src={ftlogo}></img>
                                <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
                                <ul class="follow">FOLLOW US ON</ul>
                                <div className="footer_icon">
                                    <ul>
                                        {
                                            f_icons.map((ele, ind) => {
                                                return (
                                                    <li><a key={ind} href="#" target="_blank" className='text-uppercase pe-2'>{ele.f_icon}</a></li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="feature_link">
                                <div className="feature_icon">
                                    <h4>FEATURE LINKS</h4>
                                    {
                                        feature_link.map((ele, ind) => {
                                            return (
                                                <div ley={ind} className="ft_about">
                                                    <ul>{ele.fe_icon}</ul>
                                                    <p>{ele.fe_info}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="contact_us">
                                <div className="contact_info">
                                    <h4>CONTACT US</h4>
                                    <span>Head office-yogichowk</span>
                                    <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk,<br></br> Varachha, Surat./</p>
                                    <b>Mo:</b><t>+91 90333 16003</t><br></br><br></br>
                                    <span>Other branches</span>
                                    <div>
                                        {
                                            contact.map((ele, ind) => {
                                                return (
                                                    <div ley={ind} className="university">
                                                        <ul>{ele.c_icon}</ul>
                                                        <p>{ele.c_info}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-bgcolor">
                <div className="container">
                    <div className="copyright">
                        <font>&copy;</font><p>2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;