import { useRef } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';



import Performance from "../../components/Performance/Performance";

import './Contacts.css';

const Contacts = () => {

    useEffect(() => {
		// 👇️ scroll to top on page load
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	  }, []);

    const performance = {
        title: "Contact us",
		subtitle: "Our team is on hand to answer your questions within 24 hours",
		desc: null,
		className: "performance_short"
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_desqf7n', 'template_mhafkv4', form.current, {
            publicKey: 'wJgFkgQ3-sfMsvvZW',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return(
        <div className="page">
            <Performance content={performance} />
            <div className="container">
                <div className="page__wrapper">
                    {/* <h1 className="page__title">Contact us</h1>
                    <p className="page__subtitle">Our team is on hand to answer your questions within 24 hours.</p> */}
                    <div className="page__content">
                        <div className="page__application">

                            <form className="form" ref={form} onSubmit={sendEmail}>
                                <div className="form__group">
                                    <label className="form__label" >Name*</label>
                                    <input type="text" placeholder="Your name" className="input" name="to_name"/>
                                </div>
                                <div className="form__group">
                                    <label className="form__label" >Email*</label>
                                    <input type="email" placeholder="Your email" className="input" name="to_email"/>
                                </div>
                                <div className="form__group">
                                    <label className="form__label">Message</label>
                                    <textarea cols="30" rows="4" placeholder="Your message" className="textarea" name="to_message"></textarea>
                                </div>
                                <button type="submit" className="button button__input">Send message</button>

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
