import LeftContent from "../leftContent/LeftContent";
import RightContent from "../rightContent/RightContent";
import "./styles.scss";
import Menu from "../menu/Menu";
import Services from "../service/Service";
import CurriculumVitae from "../cv/CurriculumVitae";
import Portfolio from "../portfolio/Portfoio";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";

const Home = () => {
    return(
        <div className="homeContainer">
            <LeftContent/>
            <div className="mainContainer">
                <div className="mainContent">
                    <Menu/>
                    <Services/>
                    <CurriculumVitae/>
                    <Portfolio/>
                    <Blog/>
                    <Contact/>
                </div>
            </div>
            <RightContent/>
        </div>
    )
}

export default Home;