import './Contacts.css';

const Contacts = () => {

    return(
        <div className="page page__contacts ">
            <div className="page__photo"></div>
            <div className="container">
            
                
                <div className="page__wrapper">
                    <h1 className="page__title">Contact us</h1>
                    <p className="page__subtitle">Our team is on hand to answer your questions within 24 hours.</p>
                    <div className="page__content">
                    <div className="page__application">

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
                        <div className='header__logo'>
                            <img
                                style={{ width: "120px" }}
                                src='./img/logo_white.svg'
                                alt='amatrade logo'
                            />
                        </div>
                        <p className="contacts__title">START A CONVERSATION</p>
                        <p className="contacts__desc">plisko.e@gystecom.ae</p>
                        <p className="contacts__desc">+48667952174</p>
                    </div>
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Contacts;
