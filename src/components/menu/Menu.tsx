import {profilePic} from "../../assets/images";
import {AiOutlineArrowRight} from "react-icons/ai";
import Typed from 'react-typed';
import "./styles.scss"
import { useEffect } from "react";

const Menu = () => {
    const firstCode = "<code>";
    const lastCode = "</code>";
    useEffect(() => {

    }, [])
    return(
        <div className="menu">
            <div className="mainMenu">
                <div className="leftContent">
                    <h1 className="title">I’m Mark Anthony <span>Front-End</span> Developer </h1>
                    <div className="subtitle">
                        <span className="tag">{firstCode}</span>
                        <p className="textContent">I'm coding </p>
                        <Typed
                            className="textAnimate"
                            strings={[
                            'JavaScipt',
                            'HTML and CSS',
                            'TypeScript']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                        <span  className="tag">{lastCode}</span>
                    </div>
                    <div className="hireBtnContainer">
                        <div className="hireBtnContent">
                            <h4 className="label">HIRE ME</h4>
                            <AiOutlineArrowRight className="arrow"/>
                        </div>
                    </div>
                </div>
                <img src={profilePic} alt="" />
            </div>
        </div>
    )
}

export default Menu;