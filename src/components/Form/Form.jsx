import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

import './Form.css'

import Modal from '../../components/Modal/Modal';

const Form = ({color}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameFocus, setNameFocus] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [nameError, setNameError] = useState('Input name');
    const [emailError, setEmailError] = useState('Input email');
    const [showError, setShowError] = useState(false);

    const [formValid, setFormValid] = useState(false);

    const [modalActive, setModalActive] = useState(false);

    const form = useRef();

    useEffect(() => {
        if ((nameError || emailError)) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError])

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length === 0) {
            setNameError('Input name')
        } else setNameError('')  
    }

    const emailHandler = (e) => {
        setEmail(e.target.value); 

        const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value.length === 0) {
            setEmailError('Input mail')
        } else if ((e.target.value.length > 0 && !res.test(String(e.target.value).toLowerCase()))) {
            setEmailError('Incorrect mail')
        } else setEmailError('')
        
    }

    const messageHandler = (e) => {
        setMessage(e.target.value)
    }

    const blurHandler = (e) => {
        switch (e.target.name) {

            case 'to_name': 
                setNameFocus(true);
                break;
            
                case 'to_email':
                setEmailFocus(true);
                break;
        }
    }

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

        if (!formValid) {
            setShowError(true);
        } else {
            setModalActive(true);
            setName('');
            setEmail('');
            setMessage('');
            setFormValid(false);
            setShowError(false)
            setNameError('Input name');
            setEmailError('Input email');
        }

    };

    return(
        <div className="form">     
            
                <form className="form__box" ref={form} onSubmit={sendEmail}>
                    
                    <div className="form__group">
                        <label className={"form__label " + "form__label_" + color}>Name*</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => nameHandler(e)}
                            onBlur={e => blurHandler(e)}
                            placeholder="Your name"
                            className={(nameError && showError) ? "input input_error" : "input"}
                            name="to_name"/>
                        {(showError) && <h4 className={"input__error " + "input__error_" + color}>{nameError}</h4>}
                    </div>
                    
                    <div className="form__group">
                        <label className={"form__label " + "form__label_" + color}>Email*</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => emailHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                            placeholder="Your email"
                            className={(emailError && showError) ? "input input_error" : "input"}
                            name="to_email"/>
                        {(showError) && <h4 className={"input__error " + "input__error_" + color}>{emailError}</h4>}
                    </div>
                    
                    <div className="form__group">
                        <label className={"form__label " + "form__label_" + color}>Message</label>
                        <textarea cols="30" rows="4" value={message} onChange={(e) => messageHandler(e)} onBlur={e => blurHandler(e)} placeholder="Your message" className="textarea" name="to_message"></textarea>
                    </div>

                    <button type="submit"  className="button button__input">Send message</button>
                </form>
            
    
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Form;