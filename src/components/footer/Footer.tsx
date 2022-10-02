import {frame, frame1, frame2, frame3} from "../../assets/images";
import "./styles.scss";

const Footer = () => {
    return(
        <div className="footer">
            <div className="logosContainer">
                <img className="logo" src={frame} alt="" />
                <img className="logo" src={frame1} alt="" />
                <img className="logo" src={frame2} alt="" />
                <img className="logo" src={frame3} alt="" />
            </div>
            <div className="footerContent">
                2021 All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;