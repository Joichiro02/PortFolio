import {profile, dribble, facebook, instagram, linkeding, twitter, youtube, icon, download} from "../../assets/images";
import {personalInfo, languages, skills, extraSkills} from "../../data/menuInformations";
import "./styles.scss";

const LeftContent = () => {
    return(
        <div className="leftMenu">
                <div className="profile">
                    <img className="profileImg" src={profile} alt="" />
                    <h2 className="name">Mark Anthony Famarin</h2>
                    <h4 className="positionName">Front-end Developer</h4>
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
                            {
                                personalInfo.map((info: any) => (
                                    <section className="aboutContent">
                                        <span className="label">{info.label}</span>
                                        <span className="value">{info.key}</span>
                                    </section>
                                ))
                            }
                        </div>
                        <div className="dividerLine"/>
                        <div className="languageContainer">
                            <h4 className="title">Languages</h4>
                            <div className="languageTypes">
                                {
                                    languages.map((languages : any) => (
                                        <section className="languageContent">
                                            <article className="languagetype">
                                                <span className="language">{languages.language}</span>
                                                <span className="percentage">{languages.percentage}</span>
                                            </article>
                                            <progress className="progress" value={languages.value} max={100}></progress>
                                        </section>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="dividerLine"/>
                        <div className="skillsContainer">
                            <h4 className="title">Skills</h4>
                            <div className="skillsTypes">
                                {
                                    skills.map((skills : any) => (
                                        <section className="skillsContent">
                                            <article className="skillstype">
                                                <span className="skill">{skills.skill}</span>
                                                <span className="percentage">{skills.percentage}</span>
                                            </article>
                                            <progress className="progress" value={skills.value} max={100}></progress>
                                        </section>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="dividerLine"/>
                        <div className="extraSkillsContainer">
                            <h4 className="title">Extra Skills</h4>
                            <div className="extraSkillsTypes">
                                {
                                    extraSkills.map((extraSkills : any) => (
                                        <section className="extraSkillsContent">
                                            <img className="icon" src={icon} alt="" />
                                            <h5 className="extraSkillsName">{extraSkills.extraSkill}</h5>
                                        </section>

                                    ))
                                }
                            </div>
                        </div>
                        <div className="dividerLine"/>
                        <div className="buttonCV">
                            <a href="../../assets/resume/MARK-ANTHONY-SALVACION-FAMARIN.pdf" download className="buttonCVContent">
                                <h4 className="downloadName">Download cv</h4>
                                <img className="downloadIcon" src={download} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LeftContent;