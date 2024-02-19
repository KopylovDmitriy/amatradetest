import { useRef } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';


import Performance from "../../components/Performance/Performance";

import './Contacts.css';

const Contacts = () => {

    useEffect(() => {
		window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
	}, []);

    const textAnimation = {
        hidden: {
            y: 40,
            opacity: 0
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1
            }
        })
    }

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
                <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{amount: .2}}
                className="page__wrapper">
                    <motion.div variants={textAnimation}className="page__content">
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
                    </motion.div>
                </motion.section>
            </div>
        </div>
    )
}

export default Contacts;
