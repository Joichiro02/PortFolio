import LeftContent from "../leftContent/LeftContent";
import RightContent from "../rightContent/RightContent";
import {profilePic, arrow} from "../../assets/images";
import "./styles.scss";

const Home = () => {
    return(
        <div className="homeContainer">
            <LeftContent/>
            <div className="mainContent">
                <div className="mainMenu">
                    <div className="leftContent">
                        <h1 className="title">I’m Rayan Adlrdard <span>Font - End</span> Developer </h1>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                        <div className="hireBtnContainer">
                            <div className="hireBtnContent">
                                <h4 className="label">HIRE ME</h4>
                                <img className="arrow" src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                    <img src={profilePic} alt="" />
                </div>
            </div>
            <RightContent/>
        </div>
    )
}

export default Home;