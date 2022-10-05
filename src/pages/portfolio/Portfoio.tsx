import {image, image1, image2, image3, image4, image5, image6, image7, image8} from "../../assets/images";
import {motion} from "framer-motion";
import "./styles.scss";

const Portfolio = () => {
    const containerVariant = {
        hidden: {
            opacity: 0,
            x: "100vw"
        },
        visible: {
            x:0,
            opacity: 1,
            transition: {type: "spring", delay: .7, duration: 1.5}
        },
        exit:{
            x: "-100vw",
            transition: {ease: "easeInOut", duration: 1}
        }
    }
    return(
        <motion.div className="portfolio"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
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
        </motion.div>
    )
}

export default Portfolio;