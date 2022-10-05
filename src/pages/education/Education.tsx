import "./styles.scss";
import {motion} from "framer-motion";

const Education = () => {
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
        <motion.div className="curriculumVitae"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="educationContainer">
                <h4 className="title">Education</h4>
                <p className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <div className="educationContent">
                    <div className="content">
                        <div className="left">
                            <div className="schoolName">University of Toronto</div>
                            <div className="details">
                                <span className="status">Student</span>
                                <span className="year">Jan 1016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Certificate of web training</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</div>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className="content">
                        <div className="left">
                            <div className="schoolName">Programming Course</div>
                            <div className="details">
                                <span className="status">Student</span>
                                <span className="year">Jan 1016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Certificate of web training</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</div>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className="content">
                        <div className="left">
                            <div className="schoolName">Web developer courses</div>
                            <div className="details">
                                <span className="status">Student</span>
                                <span className="year">Jan 1016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Certificate of web training</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="workContainer">
                <h4 className="title">Work History</h4>
                <p className="description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <div className="educationContent">
                    <div className="content">
                        <div className="left">
                            <div className="schoolName">Lead Web Designer</div>
                            <div className="details">
                                <span className="status">Student</span>
                                <span className="year">Jan 1016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Certificate of web training</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</div>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className="content">
                        <div className="left">
                            <div className="schoolName">Junior Web Designer</div>
                            <div className="details">
                                <span className="status">Student</span>
                                <span className="year">Jan 1016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Certificate of web training</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</div>
                        </div>
                    </div>
                    <div className="divider"/>
                    <div className="content">
                        <div className="left">
                            <div className="schoolName">Senior Web Designer</div>
                            <div className="details">
                                <span className="status">Student</span>
                                <span className="year">Jan 1016 - Dec 2021</span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="title">Certificate of web training</div>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.</div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Education;