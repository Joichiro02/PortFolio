import {blog, blog1, blog2} from "../../assets/images";
import {MdKeyboardArrowRight} from "react-icons/md";
import {motion} from "framer-motion";
import "./styles.scss";

const Blog = () => {
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
        <motion.div className="blog"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h4 className="title">Blog</h4>
            <p className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            <div className="blogs">
                <div className="blogContent">
                    <img className="blogImg" src={blog} alt="" />
                    <div className="infoContainer">
                        <h6 className="title">How to make web tempates</h6>
                        <p className="blogDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </p>
                        <div className="learnMore">
                            <span className="text">Learn more</span>
                            <MdKeyboardArrowRight className="arrow"/>
                        </div>
                    </div>
                </div>
                <div className="blogContent">
                    <img className="blogImg" src={blog1} alt="" />
                    <div className="infoContainer">
                        <h6 className="title">make Business card</h6>
                        <p className="blogDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </p>
                        <div className="learnMore">
                            <span className="text">Learn more</span>
                            <MdKeyboardArrowRight className="arrow"/>
                        </div>
                    </div>
                </div>
                <div className="blogContent">
                    <img className="blogImg" src={blog2} alt="" />
                    <div className="infoContainer">
                        <h6 className="title">How to make Flyer Design</h6>
                        <p className="blogDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna </p>
                        <div className="learnMore">
                            <span className="text">Learn more</span>
                            <MdKeyboardArrowRight className="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Blog;