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
                        <form action="post">
                            <input type="text" />
                            <input type="number" />
                            <input type="text" />
                            <button className="button button__input">Send message</button>
                        </form>
                    </div>
                    <div className="page__contacts">
                        
                        <p>Contacts</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contacts;
