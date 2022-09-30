import {blog, contact, contrast, cv, portfolio, service, home} from "../../assets/images";
import "./styles.scss";

const RightContent = () => {
    return(
        <div className="rightNav">
                <img className="contrast" src={contrast} alt="" />
                <div className="menu">
                    <span className="iconContent">
                        <img className="icon" src={home} alt="" />
                    </span>
                    <span className="iconContent">
                        <img className="icon" src={service} alt="" />
                    </span>
                    <span className="iconContent">
                        <img className="icon" src={cv} alt="" />
                    </span>
                    <span className="iconContent">
                        <img className="icon" src={portfolio} alt="" />
                    </span>
                    <span className="iconContent">
                        <img className="icon" src={blog} alt="" />
                    </span>
                    <span className="iconContent">
                        <img className="icon" src={contact} alt="" />
                    </span>
                </div>
            </div>
    )
}

export default RightContent;