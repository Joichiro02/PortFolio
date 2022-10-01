import {profilePic} from "../../assets/images";
import {AiOutlineArrowRight} from "react-icons/ai";
import "./styles.scss"

const Menu = () => {
    return(
        <div className="menu">
            <div className="mainMenu">
                <div className="leftContent">
                    <h1 className="title">I’m Rayan Adlrdard <span>Font - End</span> Developer </h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
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