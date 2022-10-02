import {map} from "../../assets/images";
import {GiFlyingFlag} from "react-icons/gi";
import {BsFillPhoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import "./styles.scss";

const Contact = () => {
    return(
        <div className="contact">
            <div className="contactContainer">
                <div className="infoContainer">
                    <h5 className="infoTitle">Leave us your info</h5>
                    <form className="infoContent">
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Your Full Name ( Required)</label>
                            <input className="textField" type="text" />
                        </section>
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Your Email ( Required)</label>
                            <input className="textField" type="text" />
                        </section>
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Subject   </label>
                            <input className="textField" type="text" />
                        </section>
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Your Message</label>
                            <textarea className="textArea" rows={11} ></textarea>
                        </section>
                        <button className="submit">send message</button>
                    </form>
                </div>
                <div className="contactContainer">
                    <h5 className="contactTitle">Contact information</h5>
                    <div className="contactContent">
                        <div className="addressContainer">
                            <div className="iconContainer">
                                <GiFlyingFlag className="icon"/>
                            </div>
                            <div className="textContainer">
                                <div className="textContent">
                                    <span className="key">Country:</span>
                                    <span className="value">Bangladesh</span>
                                </div>
                                <div className="textContent">
                                    <span className="key">City:</span>
                                    <span className="value">Dhaka</span>
                                </div>
                                <div className="textContent">
                                    <span className="key">Streat:</span>
                                    <span className="value">35 vhatara, Badda</span>
                                </div>
                            </div>
                        </div>
                        <div className="socialMediaContainer">
                            <div className="iconContainer">
                                <MdEmail className="icon"/>
                            </div>
                            <div className="textContainer">
                                <div className="textContent">
                                    <span className="key">Email:</span>
                                    <span className="value">youremail@gmail.com</span>
                                </div>
                                <div className="textContent">
                                    <span className="key">Skype:</span>
                                    <span className="value">@yourusername</span>
                                </div>
                                <div className="textContent">
                                    <span className="key">Telegram:</span>
                                    <span className="value">@yourusername</span>
                                </div>
                            </div>
                        </div>
                        <div className="telephoneContainer">
                            <div className="iconContainer">
                                <BsFillPhoneFill className="icon"/>
                            </div>
                            <div className="textContainer">
                                <div className="textContent">
                                    <span className="key">Support services:</span>
                                    <span className="value">15369</span>
                                </div>
                                <div className="textContent">
                                    <span className="key">Office:</span>
                                    <span className="value">+58 (021)356 587 235</span>
                                </div>
                                <div className="textContent">
                                    <span className="key">Personal:</span>
                                    <span className="value">+58 (021)356 587 235</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mapContainer">
                <img className="map" src={map} alt="" />
            </div>
        </div>
    )
}

export default Contact;