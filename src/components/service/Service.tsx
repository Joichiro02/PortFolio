import {code, draw, game, microphone, photographer} from "../../assets/images";
import {BsCheck2} from "react-icons/bs";
import {AiOutlinePlus} from "react-icons/ai";
import "./styles.scss";

const Services = () => {
    return(
        <div className="service">
            <div className="serviceMain">
                <h4 className="title">my services</h4>
                <p className="subtitle">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
                <div className="categories">
                    <div className="category">
                        <img className="image" src={code} alt="" />
                        <h6 className="title">web development</h6>
                        <p className="subtitle">blog, e-commerce</p>
                    </div>
                    <div className="category">
                        <img className="image" src={draw} alt="" />
                        <h6 className="title">web development</h6>
                        <p className="subtitle">blog, e-commerce</p>
                    </div>
                    <div className="category">
                        <img className="image" src={microphone} alt="" />
                        <h6 className="title">web development</h6>
                        <p className="subtitle">blog, e-commerce</p>
                    </div>
                    <div className="category">
                        <img className="image" src={game} alt="" />
                        <h6 className="title">web development</h6>
                        <p className="subtitle">blog, e-commerce</p>
                    </div>
                    <div className="category">
                        <img className="image" src={photographer} alt="" />
                        <h6 className="title">web development</h6>
                        <p className="subtitle">blog, e-commerce</p>
                    </div>
                    <div className="category">
                        <h6 className="title">advertising</h6>
                        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                        <span className="orderBtn">ORDER NOW</span>
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
                </div>
            </div>
        </div>
    )
}

export default Services;