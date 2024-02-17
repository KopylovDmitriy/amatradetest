import { NavLink } from "react-router-dom";

import './ContactUs.css'

const ContactUs = () => {
    return(
        
        <div className="action">
            <div className="container">
                <h2 className="action__title">Quality graphic designs that are guaranteed to impress your visitors – delivered in no time</h2>
                <p className="action__desc">Ask for our competitive rates to get started</p>
                <NavLink to="/contacts">
                    <button className="button cooperation__button">Contact us</button>
                </NavLink>
            </div>
        </div>
    )
}

export default ContactUs;