import {profilePic} from "../../assets/images";
import {AiOutlineArrowRight} from "react-icons/ai";
import Typed from 'react-typed';
import "./styles.scss"
import "animate.css";
import { useEffect } from "react";

const personName = "I'm Mark Anthony "
const personNames = " Developer";

const Menu = () => {
    const firstCode = "<code>";
    const lastCode = "</code>";
    useEffect(() => {

    }, [])
    return(
        <div className="menu">
            <div className="mainMenu">
                <div className="leftContent">
                    <h1 className="title">
                        {personName.split("").map((letter: any, num: number) => (
                            <span className={[" ", "'"].includes(letter) ? "" : "text"} key={num}>{letter}</span>
                        ))}
                        <span className="frontEndText">Front-End</span>
                        {personNames.split("").map((letter: any, num: number) => (
                            <span className={[" ", "'"].includes(letter) ? "" : "text"} key={num}>{letter}</span>
                        ))}
                    </h1>
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
                <img className="personImg" src={profilePic} alt="" />
            </div>
        </div>
    )
}

export default Menu;