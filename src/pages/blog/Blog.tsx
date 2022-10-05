import {blog, blog1, blog2} from "../../assets/images";
import {MdKeyboardArrowRight} from "react-icons/md";
import "./styles.scss";

const Blog = () => {
    return(
        <div className="blog">
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
        </div>
    )
}

export default Blog;