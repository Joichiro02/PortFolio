import {code, draw, game, microphone, photographer} from "../../assets/images";
import {BsCheck2, BsPersonCircle} from "react-icons/bs";
import {AiOutlinePlus, AiFillStar} from "react-icons/ai";
import { motion } from "framer-motion";
import "./styles.scss";
import Footer from "../../components/footer/Footer";

const offerServices = [
    {
        image: code,
        title: "web development",
        subtitle: "blog, e-commerce"
    },
    {
        image: draw,
        title: "web development",
        subtitle: "blog, e-commerce"
    },
    {
        image: game,
        title: "web development",
        subtitle: "blog, e-commerce"
    },
    {
        image: microphone,
        title: "web development",
        subtitle: "blog, e-commerce"
    },
    {
        image: photographer,
        title: "web development",
        subtitle: "blog, e-commerce"
    },
]

const Services = () => {
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
        <motion.div className="service"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="serviceMain">
                <h4 className="title">my services</h4>
                <p className="subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <div className="categories">
                    {
                        offerServices.map((service) => (
                            <motion.div className="category" 
                            whileHover={{ rotateX: 180 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{duration: 1}}
                                >
                                    <motion.div className="front" whileHover={{zIndex: 5}} transition={{delay: .5}}>
                                        <img className="image" src={service.image} alt="" />
                                        <h6 className="title">{service.title}</h6>
                                        <p className="subtitle">{service.subtitle}</p>
                                    </motion.div>
                                    <motion.div className="back"  whileHover={{zIndex: 15}} transition={{delay: .5}}>
                                        <h6 className="title">{service.title}</h6>
                                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                                        <span className="orderBtn">ORDER NOW</span>
                                    </motion.div>
                            </motion.div>
                        ))
                    }
                    <div className="category">
                        <div className="front">
                            <h6 className="title">advertising</h6>
                            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                            <span className="orderBtn">ORDER NOW</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pricePlans">
                <h4 className="title">Price plans</h4>
                <p className="subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <div className="categories">
                    <div className="category">
                        <h5 className="categoryType">silver</h5>
                        <div className="headerContainer">
                            <span className="amount">$0.00</span>
                            <span className="hour">/hour</span>
                        </div>
                        <p className="subHeader">For most businesses that want to optimize web queries</p>
                        <div className="servicesContent">
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">UI Design</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">web development</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">logo design</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">seo optimization</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">wordPress integration</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">5 Websites</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">unlimited user</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">20 gB bandwith</span>
                            </section>
                        </div>
                        <div className="orderBtn">
                            ORDER NOW
                        </div>
                    </div>
                    <div className="category">
                        <h5 className="categoryType">gold</h5>
                        <div className="headerContainer">
                            <span className="amount">$50.00</span>
                            <span className="hour">/hour</span>
                        </div>
                        <p className="subHeader">For most businesses that want to optimize web queries</p>
                        <div className="servicesContent">
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">UI Design</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">web development</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">logo design</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">seo optimization</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">wordPress integration</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">5 Websites</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">unlimited user</span>
                            </section>
                            <section className="serviceSection">
                                <AiOutlinePlus className="cross"/>
                                <span className="serviceName">20 gB bandwith</span>
                            </section>
                        </div>
                        <div className="orderBtn">
                            ORDER NOW
                        </div>
                    </div>
                    <div className="category">
                        <h5 className="categoryType">dimond</h5>
                        <div className="headerContainer">
                            <span className="amount">$80.00</span>
                            <span className="hour">/hour</span>
                        </div>
                        <p className="subHeader">For most businesses that want to optimize web queries</p>
                        <div className="servicesContent">
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">UI Design</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">web development</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">logo design</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">seo optimization</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">wordPress integration</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">5 Websites</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">unlimited user</span>
                            </section>
                            <section className="serviceSection">
                                <BsCheck2 className="check"/>
                                <span className="serviceName">20 gB bandwith</span>
                            </section>
                        </div>
                        <div className="orderBtn">
                            ORDER NOW
                        </div>
                    </div>
                </div>
            </div>
            <div className="recommendations">
                <h4 className="title">recommendations</h4>
                <p className="subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <div className="referenceContainer">
                    <div className="reference">
                        <div className="starsContent">
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                        </div>
                        <span className="title">Great Quality!</span>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                        <div className="characterContent">
                            <BsPersonCircle className="personImg"/>
                            <div className="info">
                                <span className="name">James Gouse</span>
                                <span className="work">Graphic Designer</span>
                            </div>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="starsContent">
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                        </div>
                        <span className="title">Amazing work!</span>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                        <div className="characterContent">
                            <BsPersonCircle className="personImg"/>
                            <div className="info">
                                <span className="name">Tiana Philips</span>
                                <span className="work">Photographer</span>
                            </div>
                        </div>
                    </div>
                    <div className="reference">
                        <div className="starsContent">
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                            <AiFillStar className="star"/>
                        </div>
                        <span className="title">Great Quality!</span>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                        <div className="characterContent">
                            <BsPersonCircle className="personImg"/>
                            <div className="info">
                                <span className="name">Talan Westervelt</span>
                                <span className="work">Business man</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Services;