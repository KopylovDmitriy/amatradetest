import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom"



import Performance from "../../components/Performance/Performance";
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Form/Form';
import Calls from '../../components/Calls/Calls';

import './Contacts.css';

const Contacts = () => {

    const [data, setData] = useState(
        {
            to_name: '',
            to_email: '',
            to_message: ''
        }
    );
    const [modalActive, setModalActive] = useState(false);

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
    
        // emailjs
        //   .sendForm('service_desqf7n', 'template_mhafkv4', form.current, {
        //     publicKey: 'wJgFkgQ3-sfMsvvZW',
        //   })
        //   .then(
        //     () => {
        //       console.log('SUCCESS!');
        //     },
        //     (error) => {
        //       console.log('FAILED...', error.text);
        //     },
        //   );
        
        // Поставить общее условия и менять только состояние
        // if(!isModalActive) {
		// 	body.style.overflow = 'hidden'
        // }
        // else {
		// 	body.style.overflow = ''
        // }

        setModalActive(true)
        setData(
            {
                to_name: '',
                to_email: '',
                to_message: ''
            } 
        )
    };

    const onChange = (e) => {
        setData(
            {
                ...data,
                [e.target.name]: e.target.value
            }
        )
    }
    
    return(
        <div className="page">
            
            <Performance content={performance} />
            
            <div className="container">
                <div className="page__wrapper">
                    <div className="page__content">
                        

                        <div className="page__application">
                            <Form color="white"/>
                        </div>

                        <div className="page__contacts">
                            <NavLink to="/">
                                <div className='header__logo'>
                                    <img
                                        style={{ width: "120px" }}
                                        src='./img/logo_white.svg'
                                        alt='amatrade logo'
                                    />
                                </div>
				             </NavLink>
                            
                            <p className="contacts__title">START A CONVERSATION</p>
                            <p className="contacts__desc">contact@amatrade.pl</p>
                            <div className="contacts__icons">
                                <Calls />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}/>

        </div>
    )
}

export default Contacts;