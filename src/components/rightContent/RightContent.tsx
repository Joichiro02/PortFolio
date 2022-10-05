import {RiBriefcase4Fill, RiContrast2Fill, RiHome2Fill} from "react-icons/ri";
import {FaFileCode, FaUserGraduate} from "react-icons/fa";
import {GiFeather} from "react-icons/gi";
import {BsFillChatLeftFill} from "react-icons/bs";
import "./styles.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const RightContent = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState<number | null>(null);
    const handleClick = (category : string, activeKey : number) => {
        navigate(category);
        setActive(activeKey);
    }
    useEffect(() => {
        const pathName = window.location.pathname;
        
        switch (pathName) {
            case "/":
                setActive(0)
                break;
            case "/service":
                setActive(1)
                break;
            case "/curriculumVitae":
                setActive(2)
                break;
            case "/portfolio":
                setActive(3)
                break;
            case "/blog":
                setActive(4)
                break;
            case "/contact":
                setActive(5)
                break;
        
            default:
                break;
        }
        console.log(pathName);
    }, [])
    return(
        <div className="rightNav">
                <RiContrast2Fill className="contrast"/>
                <div className="menu">
                    <span datatype="Home" className={classNames("iconContent",{"active": active === 0})} onClick={() => handleClick("/", 0)}>
                        <RiHome2Fill className="icon"/>
                    </span>
                    <span datatype="Service" className={classNames("iconContent",{"active": active === 1})} onClick={() => handleClick("/service", 1)}>
                        <FaFileCode className="icon"/>
                    </span>
                    <span datatype="Education" className={classNames("iconContent",{"active": active === 2})} onClick={() => handleClick("/education", 2)}>
                        <FaUserGraduate className="icon"/>
                    </span>
                    <span datatype="Portfolios" className={classNames("iconContent",{"active": active === 3})}onClick={() => handleClick("/portfolio", 3)}>
                        <RiBriefcase4Fill className="icon"/>
                    </span>
                    <span datatype="Blog" className={classNames("iconContent",{"active": active === 4})}onClick={() => handleClick("/blog", 4)}>
                        <GiFeather className="icon"/>
                    </span>
                    <span datatype="Contact" className={classNames("iconContent",{"active": active === 5})} onClick={() => handleClick("/contact", 5)}>
                        <BsFillChatLeftFill className="icon"/>
                    </span>
                </div>
            </div>
    )
}

export default RightContent;