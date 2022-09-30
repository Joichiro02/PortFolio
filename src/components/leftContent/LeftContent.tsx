import {profile, dribble, facebook, instagram, linkeding, twitter, youtube, icon, download} from "../../assets/images";
import "./styles.scss";

const LeftContent = () => {
    return(
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
                            <div className="languageTypes">
                                <section className="languageContent">
                                    <article className="languagetype">
                                        <span className="language">Bangla</span>
                                        <span className="percentage">100%</span>
                                    </article>
                                    <progress className="progress" value={100} max={100}></progress>
                                </section>
                                <section className="languageContent">
                                    <article className="languagetype">
                                        <span className="language">English</span>
                                        <span className="percentage">80%</span>
                                    </article>
                                    <progress className="progress" value={80} max={100}></progress>
                                </section>
                                <section className="languageContent">
                                    <article className="languagetype">
                                        <span className="language">Spanish</span>
                                        <span className="percentage">60%</span>
                                    </article>
                                    <progress className="progress" value={60} max={100}></progress>
                                </section>
                            </div>
                        </div>
                        <div className="dividerLine"/>
                        <div className="skillsContainer">
                            <h4 className="title">Skills</h4>
                            <div className="skillsTypes">
                                <section className="skillsContent">
                                    <article className="skillstype">
                                        <span className="skill">Html</span>
                                        <span className="percentage">90%</span>
                                    </article>
                                    <progress className="progress" value={90} max={100}></progress>
                                </section>
                                <section className="skillsContent">
                                    <article className="skillstype">
                                        <span className="skill">CSS</span>
                                        <span className="percentage">85%</span>
                                    </article>
                                    <progress className="progress" value={85} max={100}></progress>
                                </section>
                                <section className="skillsContent">
                                    <article className="skillstype">
                                        <span className="skill">Js</span>
                                        <span className="percentage">80%</span>
                                    </article>
                                    <progress className="progress" value={80} max={100}></progress>
                                </section>
                                <section className="skillsContent">
                                    <article className="skillstype">
                                        <span className="skill">PHP</span>
                                        <span className="percentage">75%</span>
                                    </article>
                                    <progress className="progress" value={75} max={100}></progress>
                                </section>
                                <section className="skillsContent">
                                    <article className="skillstype">
                                        <span className="skill">WordPress</span>
                                        <span className="percentage">85%</span>
                                    </article>
                                    <progress className="progress" value={85} max={100}></progress>
                                </section>
                            </div>
                        </div>
                        <div className="dividerLine"/>
                        <div className="extraSkillsContainer">
                            <h4 className="title">Extra Skills</h4>
                            <div className="extraSkillsTypes">
                                <section className="extraSkillsContent">
                                    <img className="icon" src={icon} alt="" />
                                    <h5 className="extraSkillsName">Bootstrap, Materialize</h5>
                                </section>
                                <section className="extraSkillsContent">
                                    <img className="icon" src={icon} alt="" />
                                    <h5 className="extraSkillsName">Stylus, Sass, Less</h5>
                                </section>
                                <section className="extraSkillsContent">
                                    <img className="icon" src={icon} alt="" />
                                    <h5 className="extraSkillsName">Gulp, Webpack, Grunt</h5>
                                </section>
                                <section className="extraSkillsContent">
                                    <img className="icon" src={icon} alt="" />
                                    <h5 className="extraSkillsName">GIT Knowledge</h5>
                                </section>
                            </div>
                        </div>
                        <div className="dividerLine"/>
                        <div className="buttonCV">
                            <div className="buttonCVContent">
                                <h4 className="downloadName">Download cv</h4>
                                <img className="downloadIcon" src={download} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LeftContent;