import './Modal.css';

import Calls from '../Calls/Calls';

const Modal = ({active, setActive}) => {

    const onCloseModal = () => {
        setActive(false);
    }
    
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__box" onClick={(e) => e.stopPropagation()}>

                <div className="modal__content">
                    <div className="modal__img">
                        <img src="./img/sloth.png" alt="sloth" />
                    </div>
                    <h2 className="modal__title">Thank you for contacting us!</h2>
                    <h3 className="modal__desc">
                        We will get in touch as soon as possible.<br/>
                        Need to reach us quickly? Use the option below:
                    </h3>
                    <div className="modal__icons">
                        <Calls background="white"/>
                    </div>
                </div>  

                <div className="cross__body" onClick={() => onCloseModal()}>
                    <div className="cross__bar"></div>
                    
                    <div className="cross__bar"></div>
                </div> 
            </div>
        </div>
    )
}

export default Modal;

