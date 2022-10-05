import {image, image1, image2, image3, image4, image5, image6, image7, image8} from "../../assets/images";
import "./styles.scss";

const Portfolio = () => {
    return(
        <div className="portfolio">
            <h4 className="title">Portfolio</h4>
            <p className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <div className="categories">
                <span className="category active">All categories</span>
                <span className="category">UI Design</span>
                <span className="category">Web Templates</span>
                <span className="category">Logo</span>
                <span className="category">Branding</span>
            </div>
            <div className="projectsContainer">
                <img className="project" src={image} alt="" />
                <img className="project" src={image1} alt="" />
                <img className="project" src={image2} alt="" />
                <img className="project" src={image3} alt="" />
                <img className="project" src={image4} alt="" />
                <img className="project" src={image5} alt="" />
                <img className="project" src={image6} alt="" />
                <img className="project" src={image7} alt="" />
                <img className="project" src={image8} alt="" />
            </div>
        </div>
    )
}

export default Portfolio;