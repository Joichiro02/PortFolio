import "./styles.scss";

const Contact = () => {
    return(
        <div className="contact">
            <div className="upperContainer">
                <div className="infoContainer">
                    <h5 className="infoTitle">Leave us your info</h5>
                    <form className="infoContent">
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Your Full Name ( Required)</label>
                            <input className="textField" type="text" />
                        </section>
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Your Email ( Required)</label>
                            <input className="textField" type="text" />
                        </section>
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Subject   </label>
                            <input className="textField" type="text" />
                        </section>
                        <section className="formSection">
                            <label className="labelName" htmlFor="">Your Message</label>
                            <textarea className="textArea" rows={11} ></textarea>
                        </section>
                        <button className="submit">send message</button>
                    </form>
                </div>
                <div className="contactContainer">
                    <h5 className="contactTitle">Contact information</h5>
                    <div className="contactContent">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;