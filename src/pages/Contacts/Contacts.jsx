import './Contacts.css';

const Contacts = () => {

    return(
        <div className="page page__contacts ">
            <div className="page__photo"></div>
            <div className="container">
                <div className="page__content">
                    <div className="page__application">
                    
                        <h1 className="page__title">Contact us</h1>
                        <p className="page__subtitle">Our team is on hand to answer your questions within 24 hours.</p>

                        <form className="form">
                            <div className="form__group">
                                <label htmlFor="" className="form__label" >Name*</label>
                                <input type="text" placeholder="Your name" className="input"/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="" className="form__label" >Email*</label>
                                <input type="text" placeholder="Your email" className="input"/>
                            </div>
                            <div className="form__group">
                                <label htmlFor="" className="form__label">Message</label>
                                <textarea name="" id="" cols="30" rows="4" placeholder="Your message" className="textarea"></textarea>
                            </div>
                            <button className="button button__input">Send message</button>

                        </form>

                    </div>
                    <div className="page__contactss">
                        
                        <p>Contacts</p>
                        <p>Contacts dfg df gd</p>
                        <p>Contactsd fgdf </p>
                        <p>Contacts</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contacts;
