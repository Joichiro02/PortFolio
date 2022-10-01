import {RiBriefcase4Fill, RiContrast2Fill, RiHome2Fill} from "react-icons/ri";
import {FaFileCode, FaUserGraduate} from "react-icons/fa";
import {GiFeather} from "react-icons/gi";
import {BsFillChatLeftFill} from "react-icons/bs";
import "./styles.scss";
import { useState } from "react";
import classNames from "classnames";

const RightContent = () => {
    const [active, setActive] = useState(0);
    const handleClick = (category : string, activeKey : number) => {
        const contact = document.querySelector(`.${category}`);
        setActive(activeKey);
        contact?.scrollIntoView({behavior: "smooth"});
    }
    return(
        <div className="rightNav">
                <RiContrast2Fill className="contrast"/>
                <div className="menu">
                    <span className={classNames("iconContent",{"active": active === 0})} onClick={() => handleClick("menu", 0)}>
                        <RiHome2Fill className="icon"/>
                    </span>
                    <span className={classNames("iconContent",{"active": active === 1})} onClick={() => handleClick("service", 1)}>
                        <FaFileCode className="icon"/>
                    </span>
                    <span className={classNames("iconContent",{"active": active === 2})} onClick={() => handleClick("curriculumVitae", 2)}>
                        <FaUserGraduate className="icon"/>
                    </span>
                    <span className={classNames("iconContent",{"active": active === 3})}onClick={() => handleClick("portfolio", 3)}>
                        <RiBriefcase4Fill className="icon"/>
                    </span>
                    <span className={classNames("iconContent",{"active": active === 4})}onClick={() => handleClick("blog", 4)}>
                        <GiFeather className="icon"/>
                    </span>
                    <span className={classNames("iconContent",{"active": active === 5})} onClick={() => handleClick("contact", 5)}>
                        <BsFillChatLeftFill className="icon"/>
                    </span>
                </div>
            </div>
    )
}

export default RightContent;