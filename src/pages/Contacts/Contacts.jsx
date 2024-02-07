import { useState } from 'react';

import './Contacts.css';

const Contacts = () => {

    const [name, setName] = useState('');

    const onSubmitName = (e) => {
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }


    return(
        <div className="page page__contacts ">
            <div className="page__photo"></div>
            <div className="container">
                <div className="page__content">
                    <div className="page__application">
                        <h1 className="page__title">Contact us</h1>
                        <p className="page__subtitle">Our team is on hand to answer your questions within 24 hours.</p>
                        <form action="post" onChange={onSubmitName}>
                            <input type="text" />
                            <input type="number" />
                            <input type="text" />
                            <button className="button button__input" >Send message</button>
                            <h2>{name}</h2>
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
