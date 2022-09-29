import {profile, dribble, facebook, instagram, linkeding, twitter, youtube} from "../../assets/images";
import "./styles.scss";


const Home = () => {
    return(
        <div className="homeContainer">
            <div className="leftMenu">
                <div className="profile">
                    <img className="profileImg" src={profile} alt="" />
                    <h2 className="name">Rayan Adlardard</h2>
                    <h4 className="positionName">Rayan Adlardard</h4>
                    <div className="socialIcon">
                        <img src={dribble} alt="" />
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkeding} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <div className="infoContainer">
                    <div className="infoContent">
                        <div className="aboutContainer">
                            <section className="aboutContent">
                                <span className="label">Age:</span>
                                <span className="value">24</span>
                            </section>
                            <section className="aboutContent">
                                <span className="label">Residence:</span>
                                <span className="value">BD</span>
                            </section>
                            <section className="aboutContent">
                                <span className="label">Freelance:</span>
                                <span className="value">Available</span>
                            </section>
                            <section className="aboutContent">
                                <span className="label">Address:</span>
                                <span className="value">Dhaka,Bangladesh</span>
                            </section>
                        </div>
                        <div className="dividerLine"/>
                        <div className="languageContainer">
                            <h4 className="title">Languages</h4>
                            <div className="languageType">
                                <section className="languageContent">
                                    <article>
                                        <span className="language"></span>
                                        <span className="percentage"></span>
                                    </article>
                                    <progress value={90}></progress>
                                </section>
                                <section className="language"></section>
                            </div>
                        </div>
                        <div className="languages">

                        </div>
                    </div>
                </div>
            </div>
            <div className="mainContent"></div>
            <div className="rightNav"></div>
        </div>
    )
}

export default Home;